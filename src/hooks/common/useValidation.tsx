export default function useValidation() {
  const checkEmailValidation = (email: string): boolean => {
    const regex = /^([a-zA-Z0-9\-._]+)@([a-zA-Z0-9-_]+).([a-z]{2,20})(.[a-z]{2,10})$/;
    return regex.test(email);
  };

  const passwordValidation = (password: string): boolean => {
    const passwordReg =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    const hasEveryCharacter = passwordReg.test(password);
    const isLongerThanTen = password.length >= 10 ? true : false;

    return hasEveryCharacter && isLongerThanTen;
  };

  return { checkEmailValidation, passwordValidation };
}
