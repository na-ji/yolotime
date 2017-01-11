import { PrivateMethod } from '../../startup/utils/private-method';
import { _ } from 'meteor/stevezhu:lodash';
import { moment } from 'meteor/momentjs:moment';

import { Editors } from '../editors/editors';
import { GrandTotals } from '../grand_totals/grand_totals';
import { Languages } from '../languages/languages';
import { OperatingSystems } from '../operating_systems/operating_systems';
import { Projects } from '../projects/projects';
import { Common } from './common';

let saveEntity = function (Entity, summaries, userId, date) {
	_.forEach(summaries, function (summary) {
		let alreadyExist = {
			userId,
			date,
		};
		if (summary.name) {
			alreadyExist.name = summary.name;
		}

		alreadyExist = Entity.findOne(alreadyExist);

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
			let date = moment(summaries.range.date).toDate();

			saveEntity(Editors, summaries.editors, userId, date);
			saveEntity(GrandTotals, [summaries.grand_total], userId, date);
			saveEntity(Languages, summaries.languages, userId, date);
			saveEntity(OperatingSystems, summaries.operating_systems, userId, date);
			saveEntity(Projects, summaries.projects, userId, date);
    	});
    }
});
