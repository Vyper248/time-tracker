import { format } from 'date-fns';

import { getTotalTime } from '../functions';

import TimesDisplay from './TimesDisplay';

const getDate = (time) => {
    return format(time, 'EEEE do');
}

const TimeList = ({times}) => {
    if (times.length === 0) return null;

    //sort objects by date
    let datesObj = {};
    times.forEach(timeObj => {
        let date = getDate(timeObj.startTime);
        if (datesObj[date] === undefined) datesObj[date] = [];
        datesObj[date].push(timeObj);
    });

    let uniqueDates = Object.keys(datesObj);

    return (
        <div>
        {
            uniqueDates.map(date => {
                let timeObjs = datesObj[date];
                let totalTime = getTotalTime(timeObjs);
                return  <div key={date}>
                            <h3>{date}</h3>
                            { timeObjs.map(obj => <TimesDisplay key={obj.startTime} obj={obj}/>) }
                            <div>Total Time: {totalTime}</div>
                        </div>;
            })
        }
        </div>
    );
}

export default TimeList;