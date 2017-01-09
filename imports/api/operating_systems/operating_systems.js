import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Common} from '../common/common';

export const OperatingSystems = new Mongo.Collection('operating_systems');

OperatingSystems.deny(Common.deny);

OperatingSystems.schema = Common.schema;

OperatingSystems.publicFields = Common.publicFields;

OperatingSystems.attachSchema(OperatingSystems.schema);
