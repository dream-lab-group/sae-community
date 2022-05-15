import type { NextPage } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/session",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home: NextPage = () => {
  return (
    <>
      <h1>This is the landing page</h1>
    </>
  );
};

export default Home;
