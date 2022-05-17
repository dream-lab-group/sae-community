import { UserLogin, UserRegistration } from '../../types/types';

import { createNewUser, loginUser } from './request';

export const handleCreateNewUser = async (event: UserRegistration) => {
  const createNewUserStatus = await createNewUser(event);
  return createNewUserStatus;
};

export const handleLoginUser = async (data: UserLogin) => {
  const loginUserStatus = await loginUser(data);
  return { loginUserStatus };
};

// export function fetchUser(): [
//   RequestResult<UserDto>,
//   React.Dispatch<RequestResult<UserDto>>,
// ] {
//   const [user, setUser] = useState<RequestResult<UserDto>>({
//     status: 'initial',
//   });

//   useEffect(() => {
//     async function getUserProfile() {
//       if (user.status === 'initial' || user.status === 'error') {
//         const result = await getInitialUserInformation();
//         if (result.status === 'success') {
//           console.log('successfull');
//         } else if (result.status === 'error') {
//           console.log('bad bad');
//         }
//         setUser(result);
//       }
//     }
//     getUserProfile();
//   }, [user.status]);
//   return [user, setUser];
// }
