function daysInAMonth(month, year) {
  let daysInMonth = new Date(year, month, 0);
  console.log(daysInMonth.getDate());
}

daysInAMonth(2, 2021);