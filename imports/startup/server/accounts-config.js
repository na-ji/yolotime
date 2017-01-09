// import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

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

	return user;
});
