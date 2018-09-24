// Date
Date.prototype.getColonTimeFromDate = (date = new Date()) => date.toTimeString().slice(0, 8)
Date.prototype.getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
Date.prototype.getMeridiemSuffixOfInteger = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';
Date.prototype.getWeek = (num = 0) => {
  const today = new Date();
  const week = [today, today, today, today, today, today, today].map((day, i)=> new Date(day.setDate(day.getDate() + i - day.getDay())));
  return week.map(d => new Date(d.setDate(d.getDate() + num * 7)));
}
Date.prototype.getTheMonth = (month = new Date().getMonth()) => {
  const theMonth = [];
  let preIndex = 0
  while(
    new Date().getWeek(preIndex).some(day => day.getMonth() === month)
    && new Date().getWeek(preIndex)[0].getDate() !== 1
  ){
    theMonth.unshift(new Date().getWeek(preIndex))
    preIndex -= 1
  }
  let nextIndex = 1
  while(
    new Date().getWeek(nextIndex).some(day => day.getMonth() === month)
  ){
    theMonth.push(new Date().getWeek(nextIndex))
    nextIndex +=1
  }
  return theMonth;
}