// import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import { BigNumber, utils } from 'ethers';
import { hashSync } from 'bcryptjs';
import { PrivateKey, Client, Where } from '@textile/hub';
import { useEthers } from '@usedapp/core';

import { Page } from 'components/layouts';
import Console from 'components/console';

import styles from './style.module.css';

const collection = {
  name: 'Buzz',
  missions: 2,
  _id: '',
};

function generateMessageForEntropy(address, appName, secret) {
  return `
******************************************************************************** 
READ THIS MESSAGE CAREFULLY.
DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND WRITE
ACCESS TO THIS APPLICATION.  
DO NOT SIGN THIS MESSAGE IF THE FOLLOWING IS NOT TRUE OR YOU DO NOT CONSENT
TO THE CURRENT APPLICATION HAVING ACCESS TO THE FOLLOWING APPLICATION.
********************************************************************************  
The Ethereum address used by this application is:  

${address}

By signing this message, you authorize the current application to use the  
following app associated with the above address:  

${appName}

The hash of your non-recoverable, private, non-persisted password or secret  
phrase is:  

${secret}

********************************************************************************  
ONLY SIGN THIS MESSAGE IF YOU CONSENT TO THE CURRENT PAGE ACCESSING THE KEYS  
ASSOCIATED WITH THE ABOVE ADDRESS AND APPLICATION.  
AGAIN, DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND  
WRITE ACCESS TO THIS APPLICATION.  
******************************************************************************** 
`;
}

export async function genPrivateKey({ account, signer, secret }) {
  const secretHash = hashSync(secret, 10);
  const message = generateMessageForEntropy(account, 'Games Vault', secretHash);
  const signedText = await signer.signMessage(message);
  const hash = utils.keccak256(signedText);
  if (hash === null) {
    throw new Error(
      'No account is provided. Please provide an account to this application.'
    );
  }
  const array = hash
    .replace('0x', '')
    .match(/.{2}/g)
    .map((hexNoPrefix) => BigNumber.from(`0x${hexNoPrefix}`).toNumber());

  if (array.length !== 32) {
    throw new Error(
      'Hash of signature is not the correct size! Something went wrong!'
    );
  }
  const identity = PrivateKey.fromRawEd25519Seed(Uint8Array.from(array));
  return identity;
}

function DBTest() {
  const [identity, setIdentity] = useState(null);
  const [client, setClient] = useState(null);
  const [threadId, setThreadId] = useState(null);
  const [messages, setMessages] = useState([]);
  const { account, library } = useEthers();
  const secret = 'hey';

  const log = useCallback((message) => {
    setMessages((old) => [
      ...old,
      {
        type: 'log',
        date: new Date(),
        message,
      },
    ]);
  });

  const success = useCallback((message) => {
    setMessages((old) => [
      ...old,
      {
        type: 'success',
        date: new Date(),
        message,
      },
    ]);
  });

  useEffect(() => {
    const gen = async () => {
      const signer = library.getSigner();
      log(`Generation identity with account ${account} and secret "${secret}"`);
      const key = await genPrivateKey({ account, signer, secret });
      setIdentity(key);
      success(`Got identity ${key.toString()}`);
    };
    if (account != null) {
      gen();
    }
  }, [account, secret]);

  useEffect(() => {
    const authorize = async (key, id) => {
      log(`Creating client...`);
      const res = await Client.withKeyInfo(key);
      await res.getToken(id);
      setClient(res);
      success(`Client created!`);
      return client;
    };

    if (identity) {
      authorize({ key: process.env.NEXT_PUBLIC_TEXTILE_KEY }, identity);
    }
  }, [identity]);

  useEffect(() => {
    const createDb = async () => {
      log(`Creating DB...`);
      const id = await client.newDB(undefined, 'nasa');
      success(`DB Thread ID ${id}`);

      log(`Creating collection...`);
      // Create a new Collection from an Object
      await client.newCollectionFromObject(id, collection, {
        name: 'astronauts',
      });
      success(`Collection created`);

      log(`Storing astronaut in DB...`);
      // Store the buzz object in the new collection
      await client.create(id, 'astronauts', [collection]);
      success(`Stored astronaut!`);
      setThreadId(id);

      return id;
    };
    if (client) {
      createDb();
    }
  }, [client]);

  useEffect(() => {
    const getByName = async (name, id) => {
      log(`Getting astronaut by name ${name} ...`);
      const query = new Where('name').eq(name);
      const astronaut = await client.find(id, 'astronauts', query);
      success(`Got astronaut ${JSON.stringify(astronaut)}`);
      return astronaut;
    };

    if (threadId) {
      getByName('Buzz', threadId);
    }
  }, [threadId]);

  if (!account) {
    return null;
  }

  return (
    <Page className={styles.page}>
      <div className={`${styles['db-test-wrapper']} wrapper`}>
        <h1>DB Test</h1>
        <Console messages={messages} />
      </div>
    </Page>
  );
}

DBTest.propTypes = {};

export default DBTest;
