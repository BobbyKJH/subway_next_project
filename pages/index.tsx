import type { NextPage } from "next";
import { useRouter } from "next/router";
// React

const Home: NextPage = () => {
  const router = useRouter();

  const NickName = localStorage.getItem("nick");

  const LogOut = () => {
    localStorage.removeItem("nick");
    router.reload();
  };

  return (
    <>
      <p>{NickName}</p>
      <button onClick={LogOut}>변경하기</button>
    </>
  );
};

export default Home;
