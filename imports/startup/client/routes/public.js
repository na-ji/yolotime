import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import '../../../ui/views/not-found';
import '../../../ui/views/layout';

FlowRouter.notFound = {
    action: function () {
        BlazeLayout.render('layout', {main: 'public.notFound'});
    }
};

FlowRouter.route('/', {
    name: 'public',
    action() {
        BlazeLayout.render('layout');
    }
});
