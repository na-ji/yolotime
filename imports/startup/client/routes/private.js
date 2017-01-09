import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';
import {Meteor} from 'meteor/meteor';

import {privateRoutes} from './security';

// import './private/editors.routes';

import '../../../ui/views/layout';
import '../../../ui/views/private/dashboard';

privateRoutes.route('/', {
    name: 'private',
    action: function () {
        BlazeLayout.render('layout', {main: 'private.dashboard'});
    }
});

privateRoutes.route('/logout', {
	name   : 'logout',
	action : function (params) {
		Meteor.logout(function () {
			FlowRouter.go(FlowRouter.path('public'));
		});
    }
});
