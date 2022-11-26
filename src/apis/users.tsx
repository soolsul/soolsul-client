import { LoginType, SignupType } from '@lib/types/user';
import axios from 'axios';
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

        const { accessToken } = result.data;
        const { refreshToken } = result.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log('axios 헤더의 Authorization은 현재 :', axios.defaults.headers.common.Authorization);
      })();
    } catch (error) {
      console.log('로그인 에러', error);
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
      console.log('회원가입 에러', error);
      reject(error);
    }
  });
}

/**
 * 로그아웃 하기 (param 없음)
 */
export function logout() {
  // const accessToken = localStorage.getItem('accessToken')
  // const refreshToken = localStorage.getItem('accessToken');
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        const result = await APIS.user.logout();
        console.log(result);
        resolve(result);

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        axios.defaults.headers.common.Authorization = '';
      })();
    } catch (error) {
      console.log('로그아웃 에러', error);
      reject(error);
    }
  });
}
