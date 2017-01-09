import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';
import {Meteor} from 'meteor/meteor';

export const privateRoutes = FlowRouter.group({
    prefix: '/private',
    triggersEnter: [function (context, redirect) {
        if (!Meteor.loggingIn() && !Meteor.userId()) {
            // Notifier.error('Your are not allowed to visit this page');
            redirect(FlowRouter.path('public'));
        }
    }]
});
