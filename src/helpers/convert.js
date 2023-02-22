
// Function which can change unixtime in time
export const beautifyUnixTime = (unixdate) => {
    let newDate = new Date(unixdate * 1000);
    let otherDate = String(newDate).split(' ');
    let getDay = newDate.getDate();
    let getMonth = newDate.getMonth();
    let getyear = newDate.getYear();
    var result;
    let today = new Date().getDate();
    let todayMonth = new Date().getMonth();
    let todayYear = new Date().getYear();
 
    if (today == getDay && todayMonth == getMonth && getyear == todayYear) {
       result = "Today "+`,${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`
    }
    else if (getDay === today + 1 && todayMonth == getMonth && getyear == todayYear) {
       result = "Tomorrow "+`${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`
    }
    else if (getDay == today - 1 && todayMonth == getMonth && getyear == todayYear) {
       result = "Yesterday "+`,${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`
    } else {
       result = `${otherDate[1]} ${otherDate[2]}, ${otherDate[3]} ${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`;
    }
    return result;
 }