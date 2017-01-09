import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Common} from '../common/common';

export const Languages = new Mongo.Collection('languages');

Languages.deny(Common.deny);

Languages.schema = Common.schema;

Languages.publicFields = Common.publicFields;

Languages.attachSchema(Languages.schema);
