import apis from "@apis/index";
import { LoginType } from "@lib/types";
interface IUseLoginType extends LoginType.FormData {}

export default function useLogin(data: IUseLoginType) {
  const handleLoginSubmit = async () => {
    try {
      await apis.user.login(data);
    } catch (err) {
      console.error(err);
    }
  };

  return { handleLoginSubmit };
}
