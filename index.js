"use strict";
const nums = [];
for (let i = 1; i <= 10; i++) {
  nums.push(i);
}

const headersColNum = [""].concat(nums);
const headersRowNum = nums.slice();

function generateTable(thCol, thRow) {
  const tableElement = document.createElement("table");
  const tableHeadElement = document.createElement("thead");
  const tableRowElement = document.createElement("tr");

  tableHeadElement.append(tableRowElement);
  tableElement.append(tableHeadElement);

  thCol.forEach((num) => {
    const numElement = document.createElement("th");
    numElement.textContent = num;
    tableRowElement.append(numElement);
  });

  const tableBody = document.createElement("tbody");

  tableElement.append(tableBody);

  for (let i = 0; i < thRow.length; i++) {
    const tableRow = document.createElement("tr");

    const numElement = document.createElement("th");
    numElement.textContent = thRow[i];
    tableRow.append(numElement);

    for (let j = 1; j < thCol.length; j++) {
      const numMultiply = document.createElement("td");
      numMultiply.textContent = thRow[i] * thCol[j];
      tableRow.append(numMultiply);
    }
    tableBody.append(tableRow);
  }

  document.body.append(tableElement);
}
generateTable(headersColNum, headersRowNum);
