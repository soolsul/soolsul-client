import { LoginType } from "@lib/types";
import React, { useState } from "react";
import useLogin from "./hooks/useLogin";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState<LoginType.FormData>({ id: "", password: "" });
  const { handleLoginSubmit } = useLogin(loginInfo);

  const handleChangeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "ID") {
      setLoginInfo({ ...loginInfo, id: e.target.value });
    } else {
      setLoginInfo({ ...loginInfo, password: e.target.value });
    }
  };

  return (
    <>
      <input id="ID" value={loginInfo.id} placeholder="ID" onChange={handleChangeLoginInfo} />
      <input id="PASSWORD" value={loginInfo.password} placeholder="PASSWORD" onChange={handleChangeLoginInfo} />
      <button onClick={handleLoginSubmit}>LOGIN</button>
    </>
  );
}
