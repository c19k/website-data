# API for covid19kerala.info

## End Points

### /patient_data/latest.json

https://data.covid19kerala.info/patient_data/latest.json

Data is an array of patient data objects.
```
  [
    { ... patient data },
    { ... patient data },
  ]
```

Example Patient Data:
```
  {
    "patientId": 1,
    "dateAnnounced": "2020-01-31",
    "ageBracket": 20,
    "gender": "F",
    "residence": "Thrissur",
    "detectedCityTown": "Thrissur",
    "detectedPrefecture": "Thrissur",
    "patientStatus": "Discharged",
    "notes": "Discharged on 13/03/2020",
    "knownCluster": "Wuhan, China",
    "releasedOn": "2020-03-13",
    "confirmedPatient": true
  },
```

| Fields | Values | Description |
| ------ | ------ | ----------- |
| patientId | Numeric | Unique identifier for patients |
| dateAnnounced | YYYY-MM-DD | Date patient was announced to have tested positive |
| ageBracket | Numeric | Age bracket (40 mean 40-49). -1 for unspecified |
| gender | M/F/Unspecified | |
| residence | String | City/Town, Prefecture (not consistent) |
| detectedCityTown | City/Town or Blank | City/Town patient was detected in |
| detectedPrefecture | Prefecture Name, or "Unspecified" | District patient was detected in. |
| patientStatus | Unspecified, Hospitalized, Deceased, Discharged, Recovered | Condition of patient (Discharged and Recovered are similar) |
| sourceURL | URL | Any news or press release where this data was sourced from |
| notes | String | Other text |
| knownCluster | String | Known cluster this patient is from (can be multiple, separated by commas) |


### /summary/latest.json

https://data.covid19kerala.info/summary/latest.json

Individal District data:
```
[
    {
      "confirmed": 175,
      "deaths": 0,
      "confirmedByCity": {
        "Kasaragod": 174,
        "Mangalore": 1
      },
      "dailyConfirmedCount": [...],
      "dailyConfirmedStartDate": "2020-01-31",
      "newlyConfirmed": 0,
      "recovered": 159,
      "name_ja": "കാസർഗോഡ്",
      "name": "Kasaragod"
]    
```

List is sorted by summary.count.

| Field | Values | Description |
| ----- | ------ | ----------- |
| count | Numeric | Total infected count |
| deaths | Numeric | Total number of deaths |
| recovered | Numeric | Total number of recovered patients |
| critical | Numeric | Total number of patients in critical condition (respirators) |
| confirmedByCity | Object | Keys are individual cites and their total infected counts |

