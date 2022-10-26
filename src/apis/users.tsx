import { LoginType } from "@lib/types";
import APIS from "./network";

/**
 * 로그인하기
 * @param id 유저 아이디
 * @param password 비밀번호
 */
export function login(data: LoginType.FormData) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await APIS.user.login(data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
