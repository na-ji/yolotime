// import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

import {Projects} from '../projects';
import {Common} from '../../common/server/publications';

Common.publishEntityOne('projects', Projects);
Common.publishEntityAll('projects', Projects);
