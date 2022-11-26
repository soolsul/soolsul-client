import { BarType } from '@lib/types';
import instance from './instance';

class BarAPI {
  public async getBarList(data: BarType.barSearchTyoe) {
    try {
      const { latitude, longitude, zoomLevel, moodTag, drinkTag } = data;
      const result = await instance.get(
        `/api/bars?latitude=${latitude}&longitude=${longitude}&level=${zoomLevel}&barMoodTagNames=${moodTag}&barAlcoholTagNames=${drinkTag}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BarAPI();
