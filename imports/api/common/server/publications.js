import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Common = {};

Common.publishEntityOne = function (name, Entity) {
	Meteor.publishComposite(`private.${name}.one`, function (entityId) {
		check(entityId, String);

		if (!this.userId) {
			return;
		}

		return {
			find() {
				return Entity.find({
					_id: entityId,
					userId: this.userId
				}, {
					limit: 1,
					fields: Entity.publicFields
				});
			}
		};
	});
}

Common.publishEntityAll = function (name, Entity) {
	Meteor.publishComposite(`private.${name}.all`, function () {
		if (!this.userId) {
			return;
		}

		return {
			find() {
				return Entity.find({
					userId: this.userId
				}, {
					fields: Entity.publicFields
				});
			}
		};
	});
}
