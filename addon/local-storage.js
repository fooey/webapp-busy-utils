/**
 * @module Utils
 *
 */
import Ember from 'ember';
import assert from './assert';

/***/
const _localStorage = window.localStorage;
const LocalStorage = Ember.Object.extend();

/**
 * `Util/LocalStorage`
 *
 * @class LocalStorage
 * @namespace Utils
 * @extends Ember.Object
 */
LocalStorage.reopenClass({

	/**
	 * Add a new value to the local storage
	 *
	 * @public
	 * @method setProperty
	 * @param {sting} key The key to store the value with.
	 * @param {mixed} value Some value to store.
	 * @returns {this}
	 */
	setProperty: function(key, value)
	{
		// assert the function recieved 2 args and
		// the first arg is a string.
		assert.funcNumArgs(arguments, 2, true);
		assert.isString(key);

		// set the value to storage.
		_localStorage.setItem(key, value);

		// return this so functions can be chained.
		return this;
	},

	/**
	 * Gets a value from the local storage
	 *
	 * @public
	 * @method getProperty
	 * @param {sting} key The key to store the value with.
	 * @returns {mixed}
	 */
	getProperty: function(key)
	{
		// assert the function recieved 1 arg and
		// the arg is a string.
		assert.funcNumArgs(arguments, 1, true);
		assert.isString(key);

		// get the value from storage.
		return _localStorage.getItem(key);
	},

	/**
	 * Gets a value from the local storage and if the value is
	 * null or undefined the defaultValue passed in will be returned.
	 *
	 * @public
	 * @method getWithDefault
	 * @param {sting} key The key to store the value with.
	 * @param {mixed} defaultValue A default value to return if the value is null or undefined.
	 * @returns {mixed}
	 */
    getWithDefault: function(key, defaultValue)
    {
		// assert the function recieved 2 args and
		// the first arg is a string.
		assert.funcNumArgs(arguments, 2, true);
		assert.isString(key);

		// get the value from storage.
        const storeValue = this.getProperty(key);

		// if returned value is null or undefined then return the defaultValue provided.
		return !Ember.isNone(storeValue) ? storeValue : defaultValue;
    },

	/**
	 * Check to see if the key provided has a value in local storage.
	 *
	 * @public
	 * @method hasValue
	 * @param {sting} key The key to store the value with.
	 * @returns {boolean}
	 */
	hasValue: function(key)
	{
		// assert the function recieved 1 arg and
		// the arg is a string.
		assert.funcNumArgs(arguments, 1, true);
		assert.isString(key);

		// return true if value is not null or undefined.
		return !Ember.isNone(this.getProperty(key));
	},

	/**
	 * Removes a value from the local storage
	 *
	 * @public
	 * @method remove
	 * @param {sting} key The key to store the value with.
	 * @returns {this}
	 */
	remove: function(key)
	{
		// assert the function recieved 1 arg and
		// the arg is a string.
		assert.funcNumArgs(arguments, 1, true);
		assert.isString(key);

		// remove the item from storage.
		_localStorage.removeItem(key);

		return this;
	},
});

export default LocalStorage;
