// import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

import {GrandTotals} from '../grand_totals';
import {Common} from '../../common/server/publications';

Common.publishEntityOne('grand_totals', GrandTotals);
Common.publishEntityAll('grand_totals', GrandTotals);
