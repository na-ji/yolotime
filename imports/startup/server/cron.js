import { SyncedCron } from 'meteor/percolate:synced-cron';

import { job as dailyFetch } from './jobs/daily-fetch';

SyncedCron.add({
	name: 'daily summaries fetch',
	schedule: function(parser) {
		// parser is a later.js parse object
		return parser.text('at 11:05 pm');
	},
	job: dailyFetch
});

SyncedCron.start();
