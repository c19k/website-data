const CONSTANTS = require('./constants');
const FetchSheet = require('./fetch_sheets');
const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_UNDER_OBSERVATION_TAB = CONSTANTS.SHEET_UNDER_OBSERVATION_TAB;


async function fetchUnderObservation() {
  return await FetchSheet.fetchRows(SHEET, SHEET_UNDER_OBSERVATION_TAB);
}

exports.fetchUnderObservation = fetchUnderObservation;
