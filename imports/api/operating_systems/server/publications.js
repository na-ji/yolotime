// import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

import {OperatingSystems} from '../operating_systems';
import {Common} from '../../common/server/publications';

Common.publishEntityOne('operating_systems', OperatingSystems);
Common.publishEntityAll('operating_systems', OperatingSystems);
