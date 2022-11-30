import { BarType } from '@lib/types';
import RestAPI from './restapi';

class PostAPI {
  /**
   * 술집 피드 조회
   * @param latitude
   * @param longitude
   * @param zoomLevel
   */
  public async getFeeds(data: BarType.barSearchTyoe) {
    try {
      const { latitude, longitude, zoomLevel = 6 } = data;
      const result = await RestAPI.get(
        `/api/posts?latitude=${latitude}&longitude=${longitude}&level=${zoomLevel}&page=${0}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PostAPI();
