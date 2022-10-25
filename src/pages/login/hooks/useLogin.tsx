import { USER } from "@apis/index";
import { useState } from "react";

export default function useLogin() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClick = async () => {
    await USER.login({ id, password });
  };

  return { onClick };
}
