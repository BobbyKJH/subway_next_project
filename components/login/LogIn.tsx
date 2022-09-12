// React
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
// Component
import Loading from "../common/Loading";
// Style
import { LogInStyle } from "../../styles/LogInStyle";

const LogIn = () => {
  const router = useRouter();
  const [name, setName] = useState<string | null>(null);
  const [nick, setNick] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const nickName = localStorage.getItem("nick");
    setName(nickName);
    setTimeout(() => {
      setIsLoading(true);
    }, 500);
    inputRef.current?.focus();
  }, []);

  // Login Input
  const inputNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNick(value);
  };

  // Login Button
  const decideNickName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const UserNick = nick;
    localStorage.setItem("nick", UserNick);
    router.reload();
  };

  return (
    <LogInStyle onSubmit={decideNickName}>
      {isLoading ? (
        <>
          <span>당신만의 서브웨이 레시피를 만들어 보세요.</span>
          <input
            type="text"
            onChange={inputNickName}
            ref={inputRef}
            placeholder="닉네임을 입력해주세요."
          />
          <button type="submit">결정</button>
        </>
      ) : (
        <Loading />
      )}
    </LogInStyle>
  );
};

export default LogIn;
