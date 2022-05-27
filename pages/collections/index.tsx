import Layout from '../../common/components/layout';

const MyCollections = () => {
  return (
    <>
      <h1> This is my collection page</h1>
    </>
  );
};

MyCollections.getLayout = function getLayout(page: typeof MyCollections) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default MyCollections;
