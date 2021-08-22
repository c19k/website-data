const CONSTANTS = require('./constants');
const FetchSheet = require('./fetch_sheets');
const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_LAST_UPDATED_TAB = CONSTANTS.SHEET_LAST_UPDATED_TAB;




async function fetchLastUpdated() {
  let lastUpdatedInfo = await FetchSheet.fetchRows(SHEET, SHEET_LAST_UPDATED_TAB)
  return lastUpdatedInfo[0]['lastUpdated'];
}

exports.fetchLastUpdated = fetchLastUpdated;
