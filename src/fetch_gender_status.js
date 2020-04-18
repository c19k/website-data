const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '19U_Y8jAIwEp7csYHhkm745b33kcfdrKROh4DeQkcaTI'
const SHEET_AGE_TAB = 6

// Helper method to do parseInt safely (reverts to 0 if unparse)
const safeParseInt = v => {
  let result = parseInt(v)
  if (isNaN(result)) {
    return 0
  }
  return result
}

async function fetchGenderStatus() {
  return drive({sheet: SHEET, tab: SHEET_AGE_TAB})
    .then(db => {
      if (db && db.length > 0) {
      	genderStatus = {}
      	genderStatus.female = safeParseInt(db[0].female)
      	genderStatus.male = safeParseInt(db[0].male)
      	genderStatus.unspecified = safeParseInt(db[0].unspecified)
      	genderStatus.total = safeParseInt(db[0].total)
        return genderStatus
      }
      return ''
    })
}

exports.fetchGenderStatus = fetchGenderStatus;
