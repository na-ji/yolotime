import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Common} from '../common/common';

export const Projects = new Mongo.Collection('projects');

Projects.deny(Common.deny);

Projects.schema = Common.schema;

Projects.publicFields = Common.publicFields;

Projects.attachSchema(Projects.schema);
