import { BarType, PostType } from '@lib/types';
import RestAPI from './restapi';
import APIResponse from './type/response';

class PostAPI {
  /**
   * 술집 피드 조회
   * @param latitude
   * @param longitude
   * @param zoomLevel
   */
  public async getFeeds(data: BarType.barSearchTyoe & { pages?: number }) {
    try {
      const { latitude, longitude, zoomLevel = 6, pages = 0 } = data;
      const result = await RestAPI.get(
        `/api/posts?latitude=${latitude}&longitude=${longitude}&level=${zoomLevel}&page=${pages}`
      );
      return result.data as APIResponse<{ postList: PostType.PostType[] }>;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PostAPI();
