// import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import moment from 'moment';

import { fetchSummaryData } from '../../api/common/methods';

// Update profile when user register
Accounts.onCreateUser(function(options, user) {
	if (options.profile) {
		user.profile = options.profile;
	} else {
		user.profile = {};
	}

	if (user.services['wakatime'] !== undefined) {
		user.profile.name     = user.services.wakatime.full_name;
		user.profile.username = user.services.wakatime.username;
		user.username         = user.services.wakatime.username;
		user.profile.avatar   = user.services.wakatime.photo;
		user.uid              = user.services.wakatime.id;

		if (user.emails === undefined) {
			user.emails = [{
				'address'  : user.services.wakatime.email,
				'verified' : true
			}];
		}
	}

	console.log(user);

	let start = moment().subtract(7, 'days').toDate();
	let end = moment();

	if (end.hour() >= 23) {
		end = end.toDate();
	} else {
		end = end.subtract(1, 'days').toDate();
	}

	fetchSummaryData.call({
    	start: start,
        end: end,
        user: user
    });

	return user;
});
