import { directus } from '..';
import { apiClient } from '../../common/data/apiClient';
import { useState, useEffect } from 'react';

function GetCurrentUser() {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const userId = await directus.users.me.read();
      const userResponse = await apiClient.get(`users/${userId.id}`);

      setCurrentUser(userResponse.data);
    }
    loadUser();
  }, []);
}

export default GetCurrentUser;