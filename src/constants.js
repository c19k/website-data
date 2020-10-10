const SUMMARY_SHEET = '18xxgKp11JEdkNS5xEz70GqtI4SlMmiWUuOOJuhGvN9k';
const SHEET_PREFECTURE_TAB = 2
const SHEET_SUM_BY_DAY_TAB = 3
const SHEET_LAST_UPDATED_TAB = 4
const SHEET_AGE_TAB = 5;
const SHEET_GENDER_TAB = 6
const SHEET_UNDER_OBSERVATION_TAB = 8;

const PATIENT_SHEETS = [
    {
        label : 'consolidated snapshot from Oct 1 2020',
        sheetId : '1NwMTkm94bYJXOW2ruGTCZcOrViyTma9KTWoQmoQYcGo',
        tab : 1
    },
    {
        label : 'consolidated snapshot till Sept 30 2020',
        sheetId : '18xxgKp11JEdkNS5xEz70GqtI4SlMmiWUuOOJuhGvN9k',
        tab : 1,
    }

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