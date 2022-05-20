import { useState } from "react";
import HomePage from "../pages/home";
import SignIn from "../pages/signin";
import { Directus } from "@directus/sdk";

const directus = new Directus("http://146.190.227.5");

function App() {
  const [count, setCount] = useState(0);
  const token = directus.auth.token;

  if (token) {
    return <HomePage />;
  } else if (!token) {
    return <SignIn />;
  } else {
    return <></>;
  }
}

export default App;
