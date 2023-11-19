// index.js

// Function to shout (convert to uppercase)
function shout(string) {
    return string.toUpperCase();
  }
  
  // Function to whisper (convert to lowercase)
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Function to log shouting
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Function to log whispering
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Function to interact with a headphoned roommate
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return "I can't hear you!";
    }
  }
  
  module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToHeadphonedRoommate,
  };
  