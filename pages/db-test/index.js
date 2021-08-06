// // import PropTypes from 'prop-types';
// import { useEffect, useState, useCallback } from 'react';
// import { Client, Where } from '@textile/hub';
// import { useEthers } from '@usedapp/core';

// import { useAuth } from 'context/auth';
// import { Page } from 'components/layouts';
// import Console from 'components/console';

// import styles from './style.module.css';

// const collection = {
//   name: 'Buzz',
//   missions: 2,
//   _id: '',
// };

// function DBTest() {
//   const { identity } = useAuth();
//   const [client, setClient] = useState(null);
//   const [threadId, setThreadId] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const { account } = useEthers();

//   const log = useCallback((message) => {
//     setMessages((old) => [
//       ...old,
//       {
//         type: 'log',
//         date: new Date(),
//         message,
//       },
//     ]);
//   });

//   const success = useCallback((message) => {
//     setMessages((old) => [
//       ...old,
//       {
//         type: 'success',
//         date: new Date(),
//         message,
//       },
//     ]);
//   });

//   useEffect(() => {
//     const authorize = async (key, id) => {
//       log(`Creating client...`);
//       const res = await Client.withKeyInfo(key);
//       await res.getToken(id);
//       setClient(res);
//       success(`Client created!`);
//       return res;
//     };

//     if (identity) {
//       authorize({ key: process.env.NEXT_PUBLIC_TEXTILE_KEY }, identity);
//     }
//   }, [identity]);

//   useEffect(() => {
//     const createDb = async () => {
//       log(`Creating DB...`);
//       const id = await client.newDB(undefined, 'nasa');
//       success(`DB Thread ID ${id}`);

//       log(`Creating collection...`);
//       // Create a new Collection from an Object
//       await client.newCollectionFromObject(id, collection, {
//         name: 'astronauts',
//       });
//       success(`Collection created`);

//       log(`Storing astronaut in DB...`);
//       // Store the buzz object in the new collection
//       await client.create(id, 'astronauts', [collection]);
//       success(`Stored astronaut!`);
//       setThreadId(id);

//       return id;
//     };
//   }, [client]);

//   useEffect(() => {
//     const getByName = async (name, id) => {
//       log(`Getting astronaut by name ${name} ...`);
//       const query = new Where('name').eq(name);
//       const astronaut = await client.find(id, 'astronauts', query);
//       success(`Got astronaut ${JSON.stringify(astronaut)}`);
//       return astronaut;
//     };

//     if (threadId) {
//       getByName('Buzz', threadId);
//     }
//   }, [threadId]);

//   if (!account) {
//     return null;
//   }

//   return (
//     <Page className={styles.page}>
//       <div className={`${styles['db-test-wrapper']} wrapper`}>
//         <h1>DB Test</h1>
//         <Console messages={messages} />
//       </div>
//     </Page>
//   );
// }

// DBTest.propTypes = {};

// export default DBTest;
