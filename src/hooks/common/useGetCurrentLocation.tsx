import { useEffect, useState } from 'react';

export default function useGetCurrentLocation() {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [error, setError] = useState('');

  const handleSuccess = (pos: any) => {
    const { latitude, longitude } = pos.coords;
    setLocation({ latitude, longitude });
  };

  const handleError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = window.navigator;

    if (!geolocation) {
      setError('위치 추적 허용이 되어 있지 않습니다.');
    }
    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error };
}
