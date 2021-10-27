import { intervalToDuration, addSeconds, differenceInHours, differenceInSeconds, format } from 'date-fns';

//add 0 to numbers less than 10
const a0 = (t) => t < 10 ? '0'+t : t;
    
export const formatSeconds = (s) => {
    if (typeof s !== 'number') return '00:00:00';
    //calculate actual difference in hours, even if over 24
    const date = new Date(0);
    let actualDate = addSeconds(date, s);
    let hours = differenceInHours(actualDate, date, {roundingMethod: 'floor'});

    //get obj with minutes and seconds
    const totalTimeObj = intervalToDuration({start: 0, end: s*1000});
    return `${a0(hours)}:${a0(totalTimeObj.minutes)}:${a0(totalTimeObj.seconds)}`;
}

export const getTotalTime = (timeObjs, returnSeconds=false) => {
    let seconds = 0;
    timeObjs.forEach(timeObj => {
        seconds += differenceInSeconds(timeObj.endTime, timeObj.startTime);
    });
    if (returnSeconds) return seconds;
    else return formatSeconds(seconds);
}

export const getDate = (time) => {
    return format(time, 'EEEE do');
}

export const sortByDate = (times) => {
    let datesObj = {};

    times.forEach(timeObj => {
        let date = getDate(timeObj.startTime);
        if (datesObj[date] === undefined) datesObj[date] = [];
        datesObj[date].push(timeObj);
    });

    return datesObj;
}