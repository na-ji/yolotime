import { HTTP } from 'meteor/http';
import moment from 'moment';

export const WakatimeAPI = {};

WakatimeAPI.fetchSummaries = function (token, dateStart, dateEnd) {
	let options = {
		params: {
			'start': moment(dateStart).format('YYYY-MM-DD'),
			'end': moment(dateEnd).format('YYYY-MM-DD')
		},
		headers: {
			'Authorization': `Bearer ${token}`
		}
	};

	try {
		var result = HTTP.get('https://wakatime.com/api/v1/users/current/summaries', options);

		if (result.statusCode === 200) {
			return result.data;
		}

		return false;
	} catch (e) {
		return false;
	}
}
