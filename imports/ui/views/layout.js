import {Template} from 'meteor/templating';
// import global jQuery
require('meteor/jquery');
require('../../startup/utils/fastclick.min.js');
require('../../startup/utils/jquery.slimscroll.min.js');
require('../../startup/utils/app.js');

import './layout.html';

Template['layout'].onRendered(() => {
	$.AdminLTE.layout.fix();
});

Template['layout'].helpers({
	'year': () => {
		return new Date().getFullYear();
	}
});
