import React, { useState } from 'react';
import { useRouter } from 'next/router';
import apis from '@apis/index';
import useValidation from '@hooks/common/useValidation';

export default function useSignup() {
  const router = useRouter();

  const { checkEmailValidation, passwordValidation } = useValidation();

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    name: '',
    nickname: '',
  });
  const [hasChanged, setHasChanged] = useState(false);
  const [invalidText, setInvalidText] = useState('');
  const [errorPart, setErrorPart] = useState('');

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputID = e.target.id;

    setHasChanged(true);
    setData({
      ...data,
      [inputID]: inputValue,
    });
  };

  const handleSignSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (checkEmailValidation(data.email) === false) {
      // alert('이메일을 바르게 입력해주세요.');
      setInvalidText('올바른 이메일을 입력해주세요');
      setErrorPart('email');
    } else if (passwordValidation(data.password) === false) {
      setInvalidText('10~16자 영문과 숫자, 특수문자를 조합해주세요.');
      setErrorPart('password');
    } else if (data.password !== data.confirmPassword) {
      setInvalidText('패스워드가 일치하지 않습니다.');
      setErrorPart('confirmPassword');
    } else if (Object.values(data).includes('')) {
      alert('가입 정보를 모두 채워주세요');
    } else {
      console.log('제출!');
      await apis.user
        .signup(data)
        .then((res) => {
          console.log(res);
          router.push('map');
        })
        .catch((err) => console.log('회원가입 에러 : ', err.message));
    }
  };

  return { data, hasChanged, invalidText, errorPart, handleSignSubmit, handleInputValue };
}
