import React from 'react'

const calculateSeasonDay = (date: Date): number => {
    const seasonStartDates = {
        spring: new Date(date.getFullYear(), 2, 1),
        summer: new Date(date.getFullYear(), 5, 1),
        autumn: new Date(date.getFullYear(), 8, 1),
        winter: new Date(date.getFullYear(), 11, 1),
    };

    let seasonStart: Date;
    if (date >= seasonStartDates.winter || date < seasonStartDates.spring) {
        seasonStart = seasonStartDates.winter;
    } else if (date >= seasonStartDates.spring && date < seasonStartDates.summer) {
        seasonStart = seasonStartDates.spring;
    } else if (date >= seasonStartDates.summer && date < seasonStartDates.autumn) {
        seasonStart = seasonStartDates.summer;
    } else {
        seasonStart = seasonStartDates.autumn;
    }

    const dayOfSeason = Math.floor((date.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return dayOfSeason;
};

const calculateDailyPoints = (dayOfSeason: number): number => {
    if (dayOfSeason === 1) return 2;
    if (dayOfSeason === 2) return 3;
    let pointsForPrevDay = 3;
    let pointsForTwoDaysAgo = 2;
    let currentPoints = 0;

    for (let i = 3; i <= dayOfSeason; i++) {
        currentPoints = Math.round(pointsForPrevDay * 0.6 + pointsForTwoDaysAgo);
        pointsForTwoDaysAgo = pointsForPrevDay;
        pointsForPrevDay = currentPoints;
    }

    return currentPoints;
};

const formatPoints = (points: number): string => {
    if (points >= 1000) {
        return `${(points / 1000).toFixed(1).replace(/\.0$/, '')}K`;
    }
    return points.toString();
};

const DailyPoints: React.FC = () => {
    const [dailyPoints, setDailyPoints] = React.useState<string>('');

    React.useEffect(() => {
        const today = new Date();
        const dayOfSeason = calculateSeasonDay(today);
        const points = calculateDailyPoints(dayOfSeason);
        setDailyPoints(formatPoints(points));
    }, []);

    return (
        <div className='flex flex-col justify-center gap-1 bg-white shadow p-3 rounded-lg'>
            <h3 className='font-medium'>Daily Points</h3>
            <p className='text-sm text-gray-500'>{dailyPoints.slice(0, 3)}K</p>
        </div>
    )
}

export default DailyPoints;