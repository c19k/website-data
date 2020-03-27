const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '1_Nyd7nerS-3b3HnIvNrh_1y27B6_R2z7oK2_1ujUKfA'
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
