const SUMMARY_SHEET = '1tEiOBsvUVz5UcEhwR8Bm4Y4-HFHOVWVZ4AHgAYeRwsg';
const SHEET_PREFECTURE_TAB = "District Data";
const SHEET_SUM_BY_DAY_TAB = "Sum by Day";
const SHEET_LAST_UPDATED_TAB = "Last Updated"
const SHEET_AGE_TAB = "Age";
const SHEET_GENDER_TAB = "Gender"
const SHEET_UNDER_OBSERVATION_TAB = "Observation";

const PATIENT_SHEETS = [
    {
        label : 'Patients data from Oct 1 2020 and All aggregate info',
        sheetId : '1NwMTkm94bYJXOW2ruGTCZcOrViyTma9KTWoQmoQYcGo',
        tab : 1
    },
    {
        label : 'consolidated snapshot till Sept 30 2020',
        sheetId : '18xxgKp11JEdkNS5xEz70GqtI4SlMmiWUuOOJuhGvN9k',
        tab : 1,
    },
    {
        label : 'Patient Sheet #3',
        sheetId : '1g_77oX8PuFDCHwfb2NB9TRs3Qdy-_eDbfqzE_-38-WQ',
        tab : 1,
    },
    {
        label : 'Patient Sheet #4',
        sheetId : '1BTtfDsL4Xgh2K3WcjMV7RfKSNwMPIFbov-mJk-X3EsY',
        tab : 1,
    },
    {
        label : 'Patient Sheet #5',
        sheetId : '1Zck671rJQzBg4O008Er5J3t7mr78W1esgCgmCCeQSKg',
        tab : 1,
    },
    {
        label : 'Patient Sheet #6',
        sheetId : '1imcP2deE3XqNCvKgQLux8BrMrWqYI0vFA8ds4h00FyA',
        tab : 1,
    },

]

module.exports  = {
    SUMMARY_SHEET,
    SHEET_AGE_TAB,
    PATIENT_SHEETS,
    SHEET_SUM_BY_DAY_TAB,
    SHEET_GENDER_TAB,
    SHEET_LAST_UPDATED_TAB,
    SHEET_PREFECTURE_TAB,
    SHEET_UNDER_OBSERVATION_TAB
}