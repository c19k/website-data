const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '19U_Y8jAIwEp7csYHhkm745b33kcfdrKROh4DeQkcaTI'
const SHEET_PREFECTURE_TAB = 2


async function fetchPrefectureSummary() {
  return drive({sheet: SHEET, tab: SHEET_PREFECTURE_TAB})
    .then(db => {
      /*console.log(db);*/
      return db
    })
}

exports.fetchPrefectureSummary = fetchPrefectureSummary;
