import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const toNiceDate = (date: number) => {
	let x = dayjs.utc(dayjs.unix(date)).format('MMM DD');
	return x;
};

export const toK = (num: any, fixed?: boolean, cutoff = false) => {
	const formatter = (divideBy: number) =>
		fixed === true
			? cutoff ? Number(num / divideBy).toFixed(0) : Number(num / divideBy).toFixed(2)
			: Number(num / divideBy);
	if (num > 999999999 || num < -9999999) {
		return `${formatter(1000000000)}M`;
	} else if (num > 999999 || num < -999999) {
		return `${formatter(1000000)}M`;
	} else if (num > 999 || num < -999) {
		return `${formatter(1000)}K`;
	} else {
		return formatter(1);
	}
};

export const toNiceDateYear = (date: any) => dayjs.utc(dayjs.unix(date)).format('MMMM DD, YYYY');
