const CONSTANTS = require('./constants');
const FetchSheet = require('./fetch_sheets');

const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_AGE_TAB = CONSTANTS.SHEET_AGE_TAB;


async function fetchAgeStatus() {
    return await FetchSheet.fetchRows(SHEET, SHEET_AGE_TAB)
}
exports.fetchAgeStatus = fetchAgeStatus;
