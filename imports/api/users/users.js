import {SimpleSchema} from 'meteor/aldeed:simple-schema';

Meteor.users.deny({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    }
});

Meteor.users.schema = new SimpleSchema({
    username: {
        type: String,
        min: 3,
        max: 30
    },
    uid: {
        type: String,
        optional: true,
    },
    emails: {
        type: [Object],
        optional: true
    },
    'emails.$.address': {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    'emails.$.verified': {
        type: Boolean
    },
    createdAt: {
        type: Date,
        optional: true
    },
    lastConnectionAt: {
        type: Date,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    profile: {
        type: Object,
        optional: true
    },
    'profile.name': {
        type: String,
        optional: true
    },
    'profile.username': {
        type: String,
        min: 3,
        max: 30,
        optional: true
    },
    'profile.avatar': {
        type: String,
        optional: true
    }
});

Meteor.users.attachSchema(Meteor.users.schema);

Meteor.users.publicFields = {
    disabled: 1,
    profile: 1
};
