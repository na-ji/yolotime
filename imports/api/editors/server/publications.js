// import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

import {Editors} from '../editors';
import {Common} from '../../common/server/publications';

Common.publishEntityOne('editors', Editors);
Common.publishEntityAll('editors', Editors);
