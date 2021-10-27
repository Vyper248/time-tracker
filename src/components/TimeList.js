import { getTotalTime, sortByDate } from '../functions';

import TimesDisplay from './TimesDisplay';

const TimeList = ({times}) => {
    if (times.length === 0) return null;

    //sort objects by date
    let datesObj = sortByDate(times);
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
                            <div>Daily Total: {totalTime}</div>
                        </div>;
            })
        }
        </div>
    );
}

export default TimeList;