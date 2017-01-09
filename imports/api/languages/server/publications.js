// import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

import {Languages} from '../languages';
import {Common} from '../../common/server/publications';

Common.publishEntityOne('languages', Languages);
Common.publishEntityAll('languages', Languages);
