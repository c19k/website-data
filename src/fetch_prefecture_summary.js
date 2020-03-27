const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '1_Nyd7nerS-3b3HnIvNrh_1y27B6_R2z7oK2_1ujUKfA'
const SHEET_PREFECTURE_TAB = 2


async function fetchPrefectureSummary() {
  return drive({sheet: SHEET, tab: SHEET_PREFECTURE_TAB})
    .then(db => {
      return db
    })
}

exports.fetchPrefectureSummary = fetchPrefectureSummary;
