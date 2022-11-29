import React, { SetStateAction, Dispatch } from 'react';
import DaumPostcode from 'react-daum-postcode';
// const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

interface IPostcodeInterface {
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
}

export const Postcode = ({ address, setAddress, setIsPopupOpen }: IPostcodeInterface) => {
  // const open = useDaumPostcodePopup(scriptUrl);
  // console.log(address);

  const handleComplete = async (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (false) {
      // disabled
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }

        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
    }
    //    console.log(data);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

    setAddress(fullAddress);
    setIsPopupOpen(false);
  };

  return (
    <div>
      <DaumPostcode autoClose onComplete={handleComplete} />
    </div>
  );
};
