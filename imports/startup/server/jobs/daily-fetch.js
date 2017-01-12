import { Meteor } from 'meteor/meteor';

import { WakatimeAPI } from '../../utils/wakatime-api';
import { fetchSummaryData } from '../../../api/common/methods';

export const job = function () {
	let users = Meteor.users.find();
	let today = new Date();

	users.forEach(function (user) {
		if (today.getTime() < user.services.wakatime.expiresAt) {
			fetchSummaryData.call({
            	start: today,
                end: today,
                user: user
            });
		} else {
			// notify the user that the token has expired
			// or use refresh token ?
		}
	});
};
