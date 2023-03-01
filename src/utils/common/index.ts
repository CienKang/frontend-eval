import { monthNames } from '../../constants/Months';

export const getFormattedDateFromUtcDate = (utcDate: string) => {
    const date = new Date(utcDate);
    return `${date.getDate()}
        ${monthNames[date.getMonth()]}, 
        ${date.getFullYear()}  ${date.getUTCHours()} : ${date.getUTCMinutes()} 
        ${date.getUTCHours()>12 ? 'PM' : 'AM'  }`;
};
  