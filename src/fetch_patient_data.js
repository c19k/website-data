const drive = require('drive-db')
const _ = require('lodash')

const SHEET = '19U_Y8jAIwEp7csYHhkm745b33kcfdrKROh4DeQkcaTI'
const SHEET_PATIENT_DATA_TAB = 1

// Post processes the data to normalize field names etc.
const postProcessData = (rawData) => {

  /*console.log(rawData)*/

  // Check validity of the row.
  const isValidRow = row => {
    if (!row.detectedPrefecture) { return false }
    if (!row.dateAnnounced) { return false }
    return true
  }

  const transformRow = row => {
    const normalizeNumber = n => {
      if (isNaN(parseInt(n))) { return -1 }
      return parseInt(n)
    }

    const unspecifiedToBlank = v => {
      if (v == 'Unspecified') return ''
      return v
    }

    let transformedRow = {
      'patientId': normalizeNumber(row.patientnumber),
      'dateAnnounced': row.dateannounced,
      'ageBracket': normalizeNumber(row.agebracket),
      'gender': unspecifiedToBlank(row.gender),
      'residence': row.residencecitydistrict,
      'detectedCityTown': row.detectedcity,
      'detectedPrefecture': row.detecteddistrict,
      'patientStatus': row.status,
      'notes': row.notes,
      'knownCluster': row.knowncluster,
      'relatedPatients': row.relatedPatients,
      'dhsPatientNumber': row.dhsorigpatientnumber,
      'districtPatientNumber': row.districtpatientnumber,
      'releasedOn': row.released,
      'oeceasedOn': row.deceased,
      'sourceURL': row.sources,
    }

    // filter empty cells.
    transformedRow = _.pickBy(transformedRow, (v, k) => {
      if (v == '') {
        return false
      }
      return true
    })

    // convert boolean fields
    let booleanFields = [ 
      'charterFlightPassenger', 
      'cruisePassengerDisembarked', 
      'cruisePassengerInfectedOnboard',
      'cruiseQuarantineOfficer',
      'detectedAtPort'
    ]
    transformedRow = _.mapValues(transformedRow, (v, k) => {
      if (booleanFields.indexOf(k) != -1) {
        return (v == '1')
      }
      return v
    })

    // Add a field to indicate whether we count as patient or not.
    transformedRow.confirmedPatient = (transformedRow.patientId > 0)

    return transformedRow
  }
  
  const rows = _.filter(_.map(rawData, transformRow), isValidRow)
  return rows
}


async function fetchPatientData() {
  return drive({sheet: SHEET, tab: SHEET_PATIENT_DATA_TAB})
    .then(db => {
      return postProcessData(db)
    })
}

exports.fetchPatientData = fetchPatientData;
