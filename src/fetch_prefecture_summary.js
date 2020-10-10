const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')
const CONSTANTS = require('./constants');

const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_PREFECTURE_TAB = CONSTANTS.SHEET_PREFECTURE_TAB;




async function fetchPrefectureSummary() {
  return drive({sheet: SHEET, tab: SHEET_PREFECTURE_TAB})
    .then(db => {
      /*console.log(db);*/
      return db
    })
}

exports.fetchPrefectureSummary = fetchPrefectureSummary;
