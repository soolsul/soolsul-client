import { LoginType, SignupType } from '@lib/types/user';
import APIS from './network';

/**
 * 로그인하기
 * @param id 유저 아이디
 * @param password 비밀번호
 */
export function login(data: LoginType) {
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        const result = await APIS.user.login(data);
        resolve(result);
      })();
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * 회원가입 하기
 * @param id 유저 아이디
 * @param password 비밀번호
 * @param phoneNumber 전화번호
 * @param name 이름
 * @param nickname 닉네임
 */
export function signup(data: SignupType) {
  console.log(data);
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        const result = await APIS.user.join(data);
        console.log(APIS);
        resolve(result);
      })();
    } catch (error) {
      reject(error);
    }
  });
}
