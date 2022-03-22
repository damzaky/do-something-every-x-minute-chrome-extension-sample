const alarmInfo = {
  delayInMinutes: 1,
  periodInMinutes: 1
};

chrome.alarms.create("alarm", alarmInfo);

chrome.alarms.onAlarm.addListener(function(alarm) {
    console.log("doing something here", alarm);
});
