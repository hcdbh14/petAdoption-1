import { filterTypes } from './filterTypes';

export const addNameFitler = (text) => {
    return {
        type: filterTypes.BY_NAME,
        input: text
    };
}

export const addRaceFitler = (text) => {
    return {
        type: filterTypes.BY_RACE,
        input: text
    };
}

export const addAreaFitler = (text) => {
    return {
        type: filterTypes.BY_AREA,
        input: text
    };
}

export const addGenderFitler = (text) => {
    return {
        type: filterTypes.BY_GENDER,
        input: text
    };
}

export const addAgeFitler = (ageNum) => {
    return {
        type: filterTypes.BY_AGE,
        input: ageNum
    };
}