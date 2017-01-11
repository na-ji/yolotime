import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Common} from '../common/common';

export const GrandTotals = new Mongo.Collection('grand_totals');

GrandTotals.deny(Common.deny);

GrandTotals.schema = Common.schema;

GrandTotals.publicFields = Common.publicFields;

GrandTotals.attachSchema(GrandTotals.schema);
