import { intervalToDuration } from 'date-fns';

//add 0 to numbers less than 10
const a0 = (t) => t < 10 ? '0'+t : t;
    
export const formatSeconds = (s) => {
    let totalTimeObj = intervalToDuration({start: 0, end: s*1000});
    return `${a0(totalTimeObj.hours)}:${a0(totalTimeObj.minutes)}:${a0(totalTimeObj.seconds)}`;
}