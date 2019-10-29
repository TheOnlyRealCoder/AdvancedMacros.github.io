'use strict';
const textArt = `


`;
function choose (arr) {
  return arr[
    Math.floor(Math.random() * arr.length)
  ];
}
function logTimes (message) {
  try {
    performance.mark(message); // this one is for WebPageTest
    console.timeStamp(message); // this is for the Performance tab in Chrome DevTools
    console.info(message, performance.now()); // this is for the console, duh

    // this here is for Google Analytics
    // ga('send', {
    //   hitType: 'timing',
    //   timingCategory: 'Performance',
    //   timingVar: message,
    //   timingValue: performance.now(),
    // });
  } catch (error) {
    console.log('failed to mark performance.');
  }
}
window.onload = function () { logTimes('DocLoaded'); };
console.log(textArt
//  + 'xyz. ' + choose([ 'thing1', "thing2" ])
 );
