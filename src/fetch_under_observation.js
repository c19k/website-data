const drive = require("drive-db");
const fs = require("fs");
const _ = require("lodash");

const SHEET = "19U_Y8jAIwEp7csYHhkm745b33kcfdrKROh4DeQkcaTI";
const SHEET_UNDER_OBSERVATION_TAB = 8;

async function fetchUnderObservation() {
  return drive({ sheet: SHEET, tab: SHEET_UNDER_OBSERVATION_TAB }).then(
    (db) => {
      return db;
    }
  );
}

exports.fetchUnderObservation = fetchUnderObservation;
