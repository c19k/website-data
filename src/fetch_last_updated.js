const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '19U_Y8jAIwEp7csYHhkm745b33kcfdrKROh4DeQkcaTI'
const SHEET_LAST_UPDATED_TAB = 4


async function fetchLastUpdated() {
  return drive({sheet: SHEET, tab: SHEET_LAST_UPDATED_TAB})
    .then(db => {
      if (db && db.length > 0) {
        return db[0].lastupdated
      }
      return ''
    })
}

exports.fetchLastUpdated = fetchLastUpdated;
