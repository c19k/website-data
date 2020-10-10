const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')
const CONSTANTS = require('./constants');

const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_LAST_UPDATED_TAB = CONSTANTS.SHEET_LAST_UPDATED_TAB;




async function fetchLastUpdated() {
  return drive({sheet: SHEET, tab: SHEET_LAST_UPDATED_TAB})
    .then(db => {
      if (db && db.length > 0) {
        return db[0].lastupdated
      }
      return ''
    })
}

exports.fetchLastUpdated = fetchLastUpdated;
