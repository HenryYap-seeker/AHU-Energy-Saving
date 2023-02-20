// Data Section

var bagFilterData = {
    data: [
      { effGrade: "M6", value: 105 },
      { effGrade: "F7", value: 118 },
      { effGrade: "F8", value: 167.7 },
      { effGrade: "F9", value: 172.6 },
    ],
};
  
var miniPleatedPanelFilterData = {
    data: [
        { effGrade: "M6", value: 125 },
        { effGrade: "F7", value: 155 },
        { effGrade: "F8", value: 165 },
        { effGrade: "F9", value: 180 },
    ],
};

var vBankFilterData = {
    data: [
        { effGrade: "M6", value: 68 },
        { effGrade: "F7", value: 74 },
        { effGrade: "F8", value: 90 },
        { effGrade: "F9", value: 107 },
    ],
};

var boxFilterData = {
    data: [
        { effGrade: "M6", value: 90 },
        { effGrade: "F7", value: 145 },
        { effGrade: "F8", value: 190 },
        { effGrade: "F9", value: 190 },
    ],
};

var separatorFilterData = {
    data: [
        { effGrade: "M6", value: 105 },
        { effGrade: "F7", value: 145 },
        { effGrade: "F8", value: 155 },
        { effGrade: "F9", value: 175 },
    ],
};

var filterTypeData = {
    data: [
      { unit: bagFilterData, value: 20 },
      { unit: miniPleatedPanelFilterData, value: 40 },
      { unit: vBankFilterData, value: 40 },
      { unit: boxFilterData, value: 25 },
      { unit: separatorFilterData, value: 50 },
    ],
  };
  
// Function Section

  function prNum(num) {
    var _0x55AC = num / Math.abs(num);
    num = Math.abs(num);
    if (num < 0.000001) {
      return num.toFixed(9)*1;
    } else {
      if (num < 0.00001) {
        return num.toFixed(8)*1;
      } else {
        if (num < 0.0001) {
          return num.toFixed(7)*1;
        } else {
          if (num < 0.001) {
            return num.toFixed(6)*1;
          } else {
            if (num < 0.01) {
              return num.toFixed(5)*1;
            } else {
              if (num < 0.1) {
                return num.toFixed(4)*1;
              } else {
                if (num < 1) {
                  return num.toFixed(3)*1;
                } else {
                  if (num < 100) {
                    return num.toFixed(2)*1;
                  } else {
                    if (num < 1000) {
                      return num.toFixed(1)*1;
                    } else {
                      return num.toFixed(0)*1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function prNumR(num) {
    var _0x55AC = num / Math.abs(num);
    num = Math.abs(num);
    if (num < 0.000001) {
      return num.toExponential(3)*1;
    } else {
      if (num < 0.00001) {
        return num.toExponential(3)*1;
      } else {
        if (num < 0.0001) {
          return num.toExponential(3)*1;
        } else {
          if (num < 0.001) {
            return num.toFixed(6)*1;
          } else {
            if (num < 0.01) {
              return num.toFixed(5)*1;
            } else {
              if (num < 0.1) {
                return num.toFixed(4)*1;
              } else {
                if (num < 1) {
                  return num.toFixed(3)*1;
                } else {
                  if (num < 100) {
                    return num.toFixed(2)*1;
                  } else {
                    if (num < 1000) {
                      return num.toFixed(1)*1;
                    } else {
                      return num.toFixed(0)*1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

// List Section
let airFlowList = document.querySelectorAll("#airFlow-output");
let pdList = document.querySelectorAll("#pd-output");
let effList = document.querySelectorAll("#fanEff-output");
let timeList = document.querySelectorAll("#time-output");
let yearlyEnergyConsumptionList = document.querySelectorAll("#yearlyEnergyConsumption");
let yearlyEnergyCostList = document.querySelectorAll("#yearlyEnergyCost");

let yearlyEACEnergyConsumptionList = document.querySelectorAll("#yearlyACEnergyConsumption");
let yearlyEACEnergyCostList = document.querySelectorAll("#yearlyEACEnergyCost");

// Main Section

function Calculation() {
    var airFlow = parseInt(document.getElementById('input1').value);
    var operatingTime = parseInt(document.getElementById('input4').value);
    var fanEff = parseInt(document.getElementById('input5').value);

    var filterType = document.getElementById('input2').selectedIndex;
    var effGrade = document.getElementById('input3').selectedIndex;
    var pressureDrop = filterTypeData.data[filterType].unit.data[effGrade].value;
    var electricityCost = document.getElementById('input6').value;

    var eacPower = parseInt(airFlow/3400*31*operatingTime/1000);
    document.getElementById('eacPower').textContent = eacPower;

    var yearlyEnergyConsumption = parseInt(prNum(airFlow/3600)*pressureDrop*operatingTime/(fanEff/100*1000));
    var yearlyEACEnergyConsumption = parseInt(prNum(airFlow/3600)*40*operatingTime/(fanEff/100*1000)+eacPower);

    for (let i = 0; i < airFlowList.length; i++) {
        airFlowList[i].textContent = prNum(airFlow/3600);
    }
    for (let i = 0; i < pdList.length; i++) {
        pdList[i].textContent = pressureDrop;
    }
    for (let i = 0; i < effList.length; i++) {
        effList[i].textContent = fanEff/100;
    }
    for (let i = 0; i < timeList.length; i++) {
        timeList[i].textContent = operatingTime;
    }
    for (let i = 0; i < yearlyEnergyConsumptionList.length; i++) {
        yearlyEnergyConsumptionList[i].textContent = yearlyEnergyConsumption;
    }
    for (let i = 0; i < yearlyEnergyCostList.length; i++) {
        yearlyEnergyCostList[i].textContent = parseInt(yearlyEnergyConsumption*electricityCost);
    }
    for (let i = 0; i < yearlyEACEnergyConsumptionList.length; i++) {
        yearlyEACEnergyConsumptionList[i].textContent = yearlyEACEnergyConsumption;
    }
    for (let i = 0; i < yearlyEACEnergyCostList.length; i++) {
        yearlyEACEnergyCostList[i].textContent = parseInt(yearlyEACEnergyConsumption*electricityCost);
    }

    // Table Section
    document.getElementById('res-table').rows[1].cells[2].innerHTML = airFlow;
    document.getElementById('res-table').rows[1].cells[3].innerHTML = airFlow;

    document.getElementById('res-table').rows[2].cells[2].innerHTML = $("#input3 option:selected").text();

    document.getElementById('res-table').rows[3].cells[2].innerHTML = operatingTime;
    document.getElementById('res-table').rows[3].cells[3].innerHTML = operatingTime;

    document.getElementById('res-table').rows[4].cells[2].innerHTML = yearlyEnergyConsumption;
    document.getElementById('res-table').rows[4].cells[3].innerHTML = yearlyEACEnergyConsumption;
    document.getElementById('res-table').rows[4].cells[4].innerHTML = yearlyEnergyConsumption - yearlyEACEnergyConsumption;

    document.getElementById('res-table').rows[5].cells[2].innerHTML = Math.round(yearlyEnergyConsumption*electricityCost);
    document.getElementById('res-table').rows[5].cells[3].innerHTML = Math.round(yearlyEACEnergyConsumption*electricityCost);
    document.getElementById('res-table').rows[5].cells[4].innerHTML = Math.round(yearlyEnergyConsumption*electricityCost) - Math.round(yearlyEACEnergyConsumption*electricityCost);

    document.getElementById('res-table').rows[6].cells[2].innerHTML = Math.round(yearlyEnergyConsumption*electricityCost + airFlow/3400*filterTypeData.data[filterType].value);
    document.getElementById('res-table').rows[6].cells[3].innerHTML = Math.round(yearlyEACEnergyConsumption*electricityCost + airFlow/3400*68);
    document.getElementById('res-table').rows[6].cells[4].innerHTML = Math.round(yearlyEnergyConsumption*electricityCost + airFlow/3400*filterTypeData.data[filterType].value) - Math.round(yearlyEACEnergyConsumption*electricityCost + airFlow/3400*68);

    document.getElementById('res-table').rows[7].cells[2].innerHTML = (yearlyEnergyConsumption*.25/1000).toFixed(1);
    document.getElementById('res-table').rows[7].cells[3].innerHTML = (yearlyEACEnergyConsumption*.25/1000).toFixed(1);
    document.getElementById('res-table').rows[7].cells[4].innerHTML = (yearlyEnergyConsumption*.25/1000 - yearlyEACEnergyConsumption*.25/1000).toFixed(1);
}
