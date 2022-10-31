class Properties {
  constructor() {}

  private _getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      try {
        window.navigator.geolocation.watchPosition((position) => {
          resolve(position);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  userInfo = {
    currentPosition: async () => await this._getCurrentPosition(),
  };
}

const Property = new Properties();
export default Property;
