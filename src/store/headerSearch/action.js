import { searchTypes } from './searchTypes';

    export const switchSearchCategory = (searchChoice) => {

        switch(searchChoice) {
            case 0:
                return { type: searchTypes.DOGS }
            case 1:
                return { type: searchTypes.CATS }
            case 2:
                return { type: searchTypes.OTHER_ANIMALS }
            case 3:
                return { type: searchTypes.SHELTERS }
            default:
                return { type: searchTypes.DOGS }
        }
      }