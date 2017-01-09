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
        type: String
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
    name: {
        type: String,
        index: true,
		unique: true
    },
    percent: {
        type: Number,
        decimal: true
    },
    text: {
        type: String
    },
    total_seconds: {
        type: Number
    },
    createdAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (!this.isSet && this.isInsert) {
                return new Date();
            }
        }
    },
    lastUpdateAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            return new Date();
        }
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
    createdAt: 1,
    lastUpdateAt: 1
};