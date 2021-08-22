const CONSTANTS = require('./constants');
const FetchSheet = require('./fetch_sheets');
const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_PREFECTURE_TAB = CONSTANTS.SHEET_PREFECTURE_TAB;




async function fetchPrefectureSummary() {
  return await FetchSheet.fetchRows(SHEET, SHEET_PREFECTURE_TAB)
}

exports.fetchPrefectureSummary = fetchPrefectureSummary;
