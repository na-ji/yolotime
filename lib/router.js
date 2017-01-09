FlowRouter.route('/', {
	name   : 'dashboard',
	action : function (params) {
        BlazeLayout.render('layout', {template: 'dashboard'});
    }
});

FlowRouter.route('/logout', {
	name   : 'logout',
	action : function (params) {
		Meteor.logout();
		FlowRouter.go('/');
    }
});
