import Layout from '../../common/components/layout';

const ProjectUpload = () => {
  return (
    <>
      <h1>THIS IS MY PROJECT UPLOAD SITE</h1>
    </>
  );
};

ProjectUpload.getLayout = function getLayout(page: typeof ProjectUpload) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default ProjectUpload;
