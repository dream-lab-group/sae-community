import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();
  console.log('router', router);

  return (
    <>
      <h1>{router.query.id}</h1>
    </>
  );
};

export default Project;
