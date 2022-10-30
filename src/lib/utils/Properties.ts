class Properties {
  private _currentPosition?: GeolocationPosition;

  constructor() {
    if (typeof window === "undefined") return;
    window.navigator.geolocation.getCurrentPosition((position) => {
      this._currentPosition = position;
    });
  }

  private _getCurrentPosition() {
    return new Promise((resolve, reject) => {
      try {
        if (typeof this._currentPosition !== "undefined") {
          resolve(this._currentPosition);
        }
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
