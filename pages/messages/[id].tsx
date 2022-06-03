import Layout from '../../common/components/layout';

const MyMessages = () => {
  return (
    <>
      <h1>THIS IS MY PROFILE</h1>
    </>
  );
};

MyMessages.getLayout = function getLayout(page: typeof MyMessages) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default MyMessages;
