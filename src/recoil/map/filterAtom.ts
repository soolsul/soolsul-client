import { atom } from 'recoil';

const filterAtom = atom({
  key: 'filterAtom',
  default: {
    isOpen: false,
    moodTag: null,
    drinkTag: null,
  },
});

export default filterAtom;
