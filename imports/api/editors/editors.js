import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Common} from '../common/common';

export const Editors = new Mongo.Collection('editors');

Editors.deny(Common.deny);

Editors.schema = Common.schema;

Editors.publicFields = Common.publicFields;

Editors.attachSchema(Editors.schema);
