FlowRouter.route('/', {
	name   : "index",
	action : function(params) {
        BlazeLayout.render("layout", {template: "index"});
    }
});
