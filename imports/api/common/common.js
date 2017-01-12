import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const Common = {};

Common.deny = {
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    }
};

Common.schema = new SimpleSchema({
    userId: {
        type: String,
        optional: true
    },
    digital: {
        type: String
    },
    hours: {
        type: Number
    },
    minutes: {
        type: Number
    },
    seconds: {
        type: Number,
        optional: true
    },
    name: {
        type: String,
        optional: true
    },
    percent: {
        type: Number,
        decimal: true,
        optional: true
    },
    text: {
        type: String
    },
    total_seconds: {
        type: Number
    },
    date: {
        type: Date,
        optional: true
    }
});

Common.publicFields = {
    digital: 1,
    hours: 1,
    minutes: 1,
    name: 1,
    percent: 1,
    text: 1,
    total_seconds: 1,
    date: 1,
    createdAt: 1,
    lastUpdateAt: 1
};
