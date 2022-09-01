import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { LogInStyle } from "../../styles/LogInStyle";

const LogIn = () => {
  const router = useRouter();
  const [name, setName] = useState<string | null>(null);
  const [nick, setNick] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const nickName = localStorage.getItem("nick");
    setName(nickName);
    inputRef.current?.focus();
  }, []);

  const inputNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNick(value);
  };

  const decideNickName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const UserNick = nick;
    localStorage.setItem("nick", UserNick);
    router.reload();
  };

  return (
    <LogInStyle onSubmit={decideNickName}>
      <span>당신만의 서브웨이 레시피를 만들어 보세요.</span>
      <input
        type="text"
        onChange={inputNickName}
        ref={inputRef}
        placeholder="닉네임을 입력해주세요."
      />
      <button type="submit">결정</button>
    </LogInStyle>
  );
};

export default LogIn;
