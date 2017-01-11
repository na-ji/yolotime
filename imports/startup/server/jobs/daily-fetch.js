import { Meteor } from 'meteor/meteor';

import { WakatimeAPI } from '../../utils/wakatime-api';
import { saveData } from '../../../api/common/methods';

export const job = function () {
	let users = Meteor.users.find();
	let today = new Date();

	users.forEach(function (user) {
		if (today.getTime() < user.services.wakatime.expiresAt) {
			let result = WakatimeAPI.fetchSummaries(user.services.wakatime.accessToken, today, today);

			if (result) {
	            saveData.call({
	            	data: result.data,
	                userId: user._id
	            });
			}
		} else {
			// notify the user that the token has expired
		}
	});
};
