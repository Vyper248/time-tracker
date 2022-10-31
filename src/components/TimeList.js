import { sortByDate } from '../functions';

import TimeGroup from './TimeGroup';

const TimeList = ({times, ...rest}) => {
    if (times.length === 0) return null;

    //sort objects by date
    let datesObj = sortByDate(times);
    let uniqueDates = Object.keys(datesObj);

    return (
        <div>
            { uniqueDates.map(date => <TimeGroup key={date} date={date} timeObjs={datesObj[date]} times={times} {...rest}/>) }
        </div>
    );
}

export default TimeList;