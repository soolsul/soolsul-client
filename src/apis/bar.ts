import { BarType } from '@lib/types';
import { AxiosResponse } from 'axios';
import APIS from './network';

/**
 * 로그인하기
 * @param latitude
 * @param longitude
 * @param zoomLevel
 * @param moodTag
 * @param drinkTag
 */
export function getBarList(data: BarType.barSearchTyoe): Promise<{ code: string; data: any; message: string }> {
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        const result: AxiosResponse<{ code: string; data: any; message: string }> = await APIS.bar.getBarList(data);
        resolve(result.data);
      })();
    } catch (error) {
      reject(error);
    }
  });
}
