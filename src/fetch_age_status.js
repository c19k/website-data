const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '19U_Y8jAIwEp7csYHhkm745b33kcfdrKROh4DeQkcaTI'
const SHEET_AGE_TAB = 5


async function fetchAgeStatus() {
  return drive({sheet: SHEET, tab: SHEET_AGE_TAB})
    .then(db => {
      if (db && db.length > 0) {
      	// console.log(db);
        return db
      }
      return ''
    })
}

exports.fetchAgeStatus = fetchAgeStatus;
