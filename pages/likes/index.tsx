import Layout from '../../common/components/layout';

const MyLikes = () => {
  return (
    <>
      <h1> This is my likes page</h1>
    </>
  );
};

MyLikes.getLayout = function getLayout(page: typeof MyLikes) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default MyLikes;
