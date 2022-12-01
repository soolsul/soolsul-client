import { curationType } from '@lib/types';
import RestAPI from './restapi';

class CurationAPI {
  /**
   * 술집 목록 조회
   * @param latitude
   * @param longitude
   * @level 지도 확대 레벨
   */
  public async getCurationList(data: curationType.curationListTyoe) {
    try {
      const { latitude, longitude, level } = data;
      const result = await RestAPI.get(`/api/curations?latitude=${latitude}&longitude=${longitude}&level=${level}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CurationAPI();
