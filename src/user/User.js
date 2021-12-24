import {API_URL, API_TOKEN} from '@env';

async function getUsers() {
  return await fetch(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
}

export default getUsers;
