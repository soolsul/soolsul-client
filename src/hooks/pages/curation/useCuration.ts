import apis from '@apis/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useCuration = () => {
  const router = useRouter();
  const [curationData, setCurationData] = useState([]);

  // const [loginInfo, setLoginInfo] = useState<LoginType>({ email: '', password: '' });

  const getList = async () => {
    try {
      await apis.curation
        .getCurationList({ latitude: 37.565314, longitude: 126.992646 })
        .then((res: any) => console.log(res))
        .then(() => router.push('map'))
        .catch((err: any) => {
          console.log('curation 에러 : ', err.response);
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getList();
  });

  return { curationData, getList };
};

export default useCuration;
