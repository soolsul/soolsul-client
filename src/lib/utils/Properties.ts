declare global {
  interface Window {
    property: any;
  }
}

class Properties {
  private _userLocation?: GeolocationPosition;

  constructor() {}

  public setUserLocation(newPosition: GeolocationPosition) {
    this._userLocation = newPosition;
  }

  get userInfo() {
    const location = this._userLocation;
    return { location };
  }
}

const Property = new Properties();

if (typeof window !== "undefined") {
  window.property = Property;
}

export default Property;
