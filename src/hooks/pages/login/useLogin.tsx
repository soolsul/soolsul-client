import apis from '@apis/index';
import { LoginType } from '@lib/types/user';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function useLogin() {
  const router = useRouter();

  const [loginInfo, setLoginInfo] = useState<LoginType>({ email: '', password: '' });

  const handleChangeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') {
      setLoginInfo({ ...loginInfo, email: e.target.value });
    } else {
      setLoginInfo({ ...loginInfo, password: e.target.value });
    }
  };

  const handleLoginSubmit = async () => {
    console.log('로그인 요청!', loginInfo);
    try {
      await apis.user
        .login(loginInfo)
        .then((res) => console.log(res))
        .then(() => router.push('map'))
        .catch((err) => {
          console.log('에러 : ', err.response);
          if (err.response.data.code === 'U005')
            alert(`이메일 계정 또는 비밀번호가 일치하지 않습니다. \n입력한 내용을 다시 확인해 주세요 `);
        });
      setLoginInfo({ email: loginInfo.email, password: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return { loginInfo, handleChangeLoginInfo, handleLoginSubmit };
}
