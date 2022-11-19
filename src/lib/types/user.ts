export type LoginType = {
  id: string;
  password: string;
};

export type SignupType = {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  nickname: string; // nickname unique
};

export type DeviceType = 'mobile' | 'web';
