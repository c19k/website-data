const CONSTANTS = require('./constants');
const FetchSheet = require('./fetch_sheets');
const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_SUM_BY_DAY_TAB = CONSTANTS.SHEET_SUM_BY_DAY_TAB;



async function fetchDailySummary() {
  return await FetchSheet.fetchRows(SHEET, SHEET_SUM_BY_DAY_TAB)
}

exports.fetchDailySummary = fetchDailySummary;
