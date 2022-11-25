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
        console.log(result);
        resolve(result);

        // const response = await APIS.user.login(data);
        // const { accessToken } = response.data;
        // const { refreshToken } = response.data;
        // localStorage.setItem('accessToken', accessToken);
        // localStorage.setItem('refreshToken', refreshToken);

        // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        // console.log('login request result: ', response);
        // resolve(response);
      })();
    } catch (error) {
      console.log(error);
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
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        const result = await APIS.user.join(data);
        console.log(result);
        resolve(result);
      })();
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
