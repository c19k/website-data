const drive = require("drive-db");
const fs = require("fs");
const _ = require("lodash");
const CONSTANTS = require('./constants');

const SHEET = CONSTANTS.SUMMARY_SHEET;
const SHEET_UNDER_OBSERVATION_TAB = CONSTANTS.SHEET_UNDER_OBSERVATION_TAB;


async function fetchUnderObservation() {
  return drive({ sheet: SHEET, tab: SHEET_UNDER_OBSERVATION_TAB }).then(
    (db) => {
      return db;
    }
  );
}

exports.fetchUnderObservation = fetchUnderObservation;
