import { PrivateMethod } from '../../startup/utils/private-method';
import { _ } from 'meteor/stevezhu:lodash';
import moment from 'moment-timezone';
import { Meteor } from 'meteor/meteor';

import { Editors } from '../editors/editors';
import { GrandTotals } from '../grand_totals/grand_totals';
import { Languages } from '../languages/languages';
import { OperatingSystems } from '../operating_systems/operating_systems';
import { Projects } from '../projects/projects';
import { Common } from './common';
import { WakatimeAPI } from '../../startup/utils/wakatime-api';
import '../users/users';

let saveEntity = function (Entity, summaries, userId, date) {
	_.forEach(summaries, function (summary) {
		let query = {
			userId,
			date
		};
		if (summary.name) {
			query.name = summary.name;
		}

		let alreadyExist = Entity.findOne(query);

		if (!alreadyExist) {
			summary.date = date;
			summary.userId = userId;
			Entity.insert(summary);
		}
	});
};

export const saveData = new PrivateMethod({
    schema: {
        userId: {
        	type: String
        },
        data: {
            type: [Object]
        },
        'data.$.editors': {
        	type: [Common.schema]
        },
        'data.$.entities': {
        	type: [Object],
        	blackbox: true // for now we ignore entities
        },
        'data.$.grand_total': {
        	type: Common.schema
        },
        'data.$.languages': {
        	type: [Common.schema]
        },
        'data.$.operating_systems': {
        	type: [Common.schema]
        },
        'data.$.projects': {
        	type: [Common.schema]
        },
        'data.$.range': {
        	type: Object,
        	blackbox: true
        }
    },
    run({data, userId}) {
    	_.forEach(data, function (summaries) {
			let date = moment.tz(summaries.range.date, summaries.range.timezone).toDate();

			saveEntity(Editors, summaries.editors, userId, date);
			saveEntity(GrandTotals, [summaries.grand_total], userId, date);
			saveEntity(Languages, summaries.languages, userId, date);
			saveEntity(OperatingSystems, summaries.operating_systems, userId, date);
			saveEntity(Projects, summaries.projects, userId, date);
    	});
    }
});

export const fetchSummaryData = new PrivateMethod({
	schema: {
		start: {
			type: Date
		},
		end: {
			type: Date
		},
		user: {
			type: Meteor.users.schema
		}
	},
    run({start, end, user}) {
		let result = WakatimeAPI.fetchSummaries(user.services.wakatime.accessToken, start, end);

		if (result) {
            saveData.call({
            	data: result.data,
                userId: user._id
            });
		}
    }
})
