const calculateTotals = (daily) => {
    // Calculate the totals
    let totals = {
      confirmed: 0,
      recovered: 0,
      deceased: 0,
      critical: 0,
      tested: 0,
      observation: 0,
      homeObservation: 0,
      hosptilised: 0,
      active: 0,
    };
    let totalsDiff = {
      confirmed: 1,
      recovered: 1,
      deceased: 1,
      critical: 1,
      tested: 1,
      observation: 0,
      homeObservation: 0,
      hosptilised: 0,
      active: 0,
    };
    
    // If there is an empty cell, fall back to the previous row
    function pullLatestSumAndDiff(rowKey, totalKey) {
      let latest = {};
      let dayBefore = {};
      let twoDaysBefore = {};
      if (daily.length > 2) {
        twoDaysBefore = daily[daily.length - 3];
      }
      if (daily.length > 1) {
        dayBefore = daily[daily.length - 2];
      }
      if (daily.length > 0) {
        latest = daily[daily.length - 1];
      }
  
      if (latest && dayBefore && latest[rowKey] && dayBefore[rowKey]) {
        totals[totalKey] = latest[rowKey];
        totalsDiff[totalKey] = latest[rowKey] - dayBefore[rowKey];
      }
  
      /*
        if latest day's status is not Finalised yet and the difference in current key is <=0, 
        Compare with data of two days before. This prevents showing 0 diffs 
        in case of data in spreadsheet is not updated with current day yet
      */
      if (
        latest.status !== "Finalised" &&
        totalsDiff[totalKey] <= 0 &&
        twoDaysBefore &&
        twoDaysBefore[rowKey]
      ) {
        totalsDiff[totalKey] = latest[rowKey] - twoDaysBefore[rowKey];
      }
  
      if (rowKey == "deceasedCumulative" && totals[totalKey] == 1) {
        totals[totalKey] = 2;
      }
    }
  
    pullLatestSumAndDiff("tested", "tested");
    pullLatestSumAndDiff("critical", "critical");
    pullLatestSumAndDiff("confirmed", "confirmed");
    pullLatestSumAndDiff("recovered", "recovered");
    pullLatestSumAndDiff("deceased", "deceased");
    pullLatestSumAndDiff("observation", "observation");
    pullLatestSumAndDiff("homeobservation", "homeObservation");
    pullLatestSumAndDiff("hosptilised", "hosptilised");
    pullLatestSumAndDiff("active", "active");
    return {totals, totalsDiff};
  }

module.exports  = {
    calculateTotals
}