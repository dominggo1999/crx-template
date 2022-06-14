import { onMessage } from 'webext-bridge';

onMessage('ping', ({ data }) => {
  return `i am still alive and healthy ${new Date()}`;
});
