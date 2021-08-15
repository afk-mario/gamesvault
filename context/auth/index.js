import React, { useReducer, useEffect } from 'react';
import { PrivateKey } from '@textile/hub';
import { useEthers } from '@usedapp/core';

import Spinner from 'components/spinner';

import { genPrivateKey } from './utils';

const AuthContext = React.createContext();
const storageKey = 'identity';
const secret = 'hey';

const initialState = {
  identity: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GEN_IDENTITY':
      return { ...state, identity: null, loading: true };
    case 'SET_IDENTITY':
      return { ...state, identity: action.payload.identity, loading: false };
    case 'REMOVE_IDENTITY':
      return {
        ...state,
        identity: null,
        loading: false,
        error: null,
      };
    case 'FAIL_IDENTITY':
      return {
        ...state,
        identity: null,
        loading: false,
        error: action.payload.error,
      };
    default:
      console.error(`Action not supported ${action.type}`);
      return state;
  }
};

function AuthProvider(props) {
  const { account, library } = useEthers();
  const [state, dispatch] = useReducer(reducer, initialState);

  async function loginAnon() {
    dispatch({ type: 'GEN_IDENTITY' });
    const identity = await PrivateKey.fromRandom();
    localStorage.setItem(storageKey, identity.toString());
    dispatch({ type: 'SET_IDENTITY', payload: { identity } });
  }

  async function login() {
    dispatch({ type: 'GEN_IDENTITY' });
    const signer = library.getSigner();
    const identity = await genPrivateKey({ account, signer, secret });
    localStorage.setItem(storageKey, identity.toString());
    dispatch({ type: 'SET_IDENTITY', payload: { identity } });
  }

  function logout() {
    dispatch({ type: 'REMOVE_IDENTITY' });
    localStorage.removeItem(storageKey);
  }

  useEffect(() => {
    const cached = localStorage.getItem(storageKey);
    const identity = cached ? PrivateKey.fromString(cached) : null;

    if (!identity) {
      loginAnon();
    } else {
      dispatch({ type: 'SET_IDENTITY', payload: { identity } });
    }
  }, []);

  if (state.loading) {
    return <Spinner />;
  }

  if (!state.identity) {
    return 'Not identity created';
  }

  return (
    <AuthContext.Provider
      value={{
        identity: state.identity,
        login,
        loginAnon,
        logout,
      }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
