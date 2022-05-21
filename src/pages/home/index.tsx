import { Directus } from '@directus/sdk';

const directus = new Directus('http://146.190.227.5');
const HomePage = () => {
  const token = directus.auth.token;
  if (token) {
    return (
      <>
        <h1>THIS IS THE HOMEPAGE</h1>
      </>
    );
  } else {
    return <></>;
  }
};

export default HomePage;
