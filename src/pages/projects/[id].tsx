import { useRouter } from 'next/router';

export const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>hello i'm a single project</h1>
    </>
  );
};
