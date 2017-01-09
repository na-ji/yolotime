FlowRouter.route('/', {
	name   : 'dashboard',
	action : function (params) {
        BlazeLayout.render('layout', {template: 'dashboard'});
    }
});
