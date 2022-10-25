import useLogin from "./hooks/useLogin";

export default function Login() {
  const { onClick } = useLogin();
  return <button onClick={onClick}></button>;
}
