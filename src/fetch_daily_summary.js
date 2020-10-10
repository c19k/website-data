const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')
const CONSTANTS = require('./constants');

const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_SUM_BY_DAY_TAB = CONSTANTS.SHEET_SUM_BY_DAY_TAB;



async function fetchDailySummary() {
  return drive({sheet: SHEET, tab: SHEET_SUM_BY_DAY_TAB})
    .then(db => {
      return db
    })
}

exports.fetchDailySummary = fetchDailySummary;
