Template.layout.onRendered(function () {
	$.AdminLTE.layout.fix();
});

Template.layout.helpers({
	'year': function () {
		return new Date().getFullYear();
	}
});
