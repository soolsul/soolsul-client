/**
 * [전역 프라퍼티]
 * 필요한 값을 로컬스토리지에 세팅하는 method와
 * 필요한 값을 로컬스토리지에서 가져오는 getter로 구성.
 */
class Properties {
  constructor() {
    if (typeof window === "undefined") return;
  }

  public setUserLocation(newGeoLocation: GeolocationPosition) {
    const { coords, timestamp } = newGeoLocation;
    const result = {
      coords: {
        latitude: coords.latitude,
        accuracy: coords.accuracy,
        altitude: coords.altitude,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        longitude: coords.longitude,
        speed: coords.speed,
      },
      timestamp: timestamp,
    };
    window.localStorage.setItem("GeoLocation", JSON.stringify(result));
  }

  get userInfo() {
    const location = JSON.parse(window.localStorage.getItem("GeoLocation") || "null");
    return { location };
  }
}

const Property = new Properties();

export default Property;
