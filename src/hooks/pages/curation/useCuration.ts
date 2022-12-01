import apis from '@apis/index';
import { useEffect, useState } from 'react';

const useCuration = () => {
  const [curationData, setCurationData] = useState([]);

  // const [loginInfo, setLoginInfo] = useState<LoginType>({ email: '', password: '' });

  const getList = async () => {
    try {
      await apis.curation
        .getCurationList({ latitude: 37.565314, longitude: 126.992646, level: 3 })
        .then((res: any) => {
          setCurationData(res.data);
        })
        .catch((err: any) => {
          alert('curation 목록 조회가 실패하였습니다. 다시 시도해주세요');
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
