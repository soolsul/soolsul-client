import { atom } from 'recoil';

interface filterType {
  isOpen: boolean;
  moodTag: string;
  drinkTag: string;
}

const filterAtom = atom<filterType>({
  key: 'filterAtom',
  default: {
    isOpen: false,
    moodTag: '',
    drinkTag: '',
  },
});

export default filterAtom;
