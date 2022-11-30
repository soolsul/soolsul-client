import React, { SetStateAction, Dispatch } from 'react';
import DaumPostcode from 'react-daum-postcode';

interface IPostcodeInterface {
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  setJibunAddress: Dispatch<SetStateAction<string>>;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
}

export const Postcode = ({ setAddress, setJibunAddress, setIsPopupOpen }: IPostcodeInterface) => {
  const handleComplete = async (data: any) => {
    const fullAddress = data.address;
    const jibunAddress = `${data.sido} ${data.sigungu} ${data.bname}`;

    console.log(data);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(jibunAddress);

    setAddress(fullAddress);
    setJibunAddress(jibunAddress);
    setIsPopupOpen(false);
  };

  return (
    <div>
      <DaumPostcode autoClose onComplete={handleComplete} />
    </div>
  );
};
