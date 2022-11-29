// import { BarType } from '@lib/types';
import RestAPI from './restapi';

class CurationAPI {
  /**
   * 술집 목록 조회
   * @param latitude
   * @param longitude
   */
  public async getCurationList(data) {
    try {
      const { latitude, longitude } = data;
      const result = await RestAPI.get(`/api/curation?regionId={regionId}&offset={offset}&limit={limit}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CurationAPI();
