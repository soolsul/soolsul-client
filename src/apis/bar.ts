import { BarType } from '@lib/types';
import APIS from './network';

/**
 * 로그인하기
 * @param id 유저 아이디
 * @param password 비밀번호
 */
export function getBarList(data: BarType.barSearchTyoe) {
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        const result = await APIS.bar.getBarList(data);
        resolve(result);
      })();
    } catch (error) {
      reject(error);
    }
  });
}
