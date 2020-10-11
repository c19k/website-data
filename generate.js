const fs = require('fs')
const moment = require('moment')

const FetchPatientData = require('./src/fetch_patient_data.js')
const FetchDailySummary = require('./src/fetch_daily_summary.js')
const FetchPrefectureSummary = require('./src/fetch_prefecture_summary.js')
const FetchLastUpdated = require('./src/fetch_last_updated.js')
const FetchAgeStatus = require('./src/fetch_age_status.js')
const FetchGenderStatus = require('./src/fetch_gender_status.js')
const FetchUnderObservation = require("./src/fetch_under_observation.js");

const Summarize = require('./src/summarize.js')

const fetchAndSummarize = async (dateString) => {
  const daily = await FetchDailySummary.fetchDailySummary()
  const prefectures = await FetchPrefectureSummary.fetchPrefectureSummary()
  const lastUpdated = await FetchLastUpdated.fetchLastUpdated()

  //Under observation
  const underObervation = await FetchUnderObservation.fetchUnderObservation();

  // Age and gender
  const ageStatusData =  await FetchAgeStatus.fetchAgeStatus()
  const genderStatusData = await FetchGenderStatus.fetchGenderStatus()

  // Fetch and write patients data.
  const patients = await FetchPatientData.fetchPatientData()
  const patientOutputFilename = `./docs/patient_data/${dateString}.json`
  fs.writeFileSync(patientOutputFilename, JSON.stringify(patients, null, '  '))

  // Generate and write summary to JSON.
  const summary = Summarize.summarize(patients, daily, prefectures, lastUpdated, ageStatusData, genderStatusData, underObervation)
  const summaryOutputFilename = `./docs/summary/${dateString}.json`
  const kpiOutputFilename = `./docs/kpi/${dateString}.json`
  fs.writeFileSync(summaryOutputFilename, JSON.stringify(summary, null, '  '))
  fs.writeFileSync(kpiOutputFilename, JSON.stringify(summary.kpiData, null, '  '))
}

// Add 330 = UTC+5:30 for IST.
const dateString = moment().utcOffset(330).format('YYYY-MM-DD')
fetchAndSummarize(dateString)