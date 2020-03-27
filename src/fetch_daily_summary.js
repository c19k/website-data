const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '1_Nyd7nerS-3b3HnIvNrh_1y27B6_R2z7oK2_1ujUKfA'
const SHEET_SUM_BY_DAY_TAB = 3


async function fetchDailySummary() {
  return drive({sheet: SHEET, tab: SHEET_SUM_BY_DAY_TAB})
    .then(db => {
      return db
    })
}

exports.fetchDailySummary = fetchDailySummary;
