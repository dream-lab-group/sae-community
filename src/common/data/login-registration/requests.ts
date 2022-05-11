import { useQuery } from 'react-query';

export const createNewUser = (data: {}) => {
  return useQuery('create_users_item', async () => {});
};
