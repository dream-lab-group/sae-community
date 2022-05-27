import Layout from '../../common/components/layout';

const MyProfile = () => {
  return (
    <>
      <h1>THIS IS MY PROFILE</h1>
    </>
  );
};

MyProfile.getLayout = function getLayout(page: typeof MyProfile) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default MyProfile;
