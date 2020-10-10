const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')
const CONSTANTS = require('./constants');

const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_AGE_TAB = CONSTANTS.SHEET_AGE_TAB;


async function fetchAgeStatus() {
  return drive({sheet: SHEET, tab: SHEET_AGE_TAB})
    .then(db => {
      if (db && db.length > 0) {
      	// console.log(db);
        return db
      }
      return ''
    })
}

exports.fetchAgeStatus = fetchAgeStatus;
