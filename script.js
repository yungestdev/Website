function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hi there!");
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
}

function devchannel() {
    window.location.href ="https://www.youtube.com/channel/UC0p39g9BGxTC49mPPk-A8fA"
}

function audio() {
    var audio = new Audio("audiowelcome.mp3");
    audio.play();

}

function youtube() {
    window.location.href = "https://www.youtube.com";
}
function nextpage() {
    window.location.href = "file:///C:/Users/giorg/Desktop/web%20site/secondpage.html"
}
function bot() {
  window.location.href ="https://discord.com/oauth2/authorize?client_id=797227110887587870&scope=bot&permissions=2147483647"
}
function musicbot() {
  window.location.href = "https://discord.com/oauth2/authorize?client_id=799677273426231367&scope=bot&permissions=2147483647"
}
function luvu() {
  window.location.href="file:///C:/Users/giorg/Desktop/web%20site/easteregg.html"
}
function dwnl() {
  window.location.pathname="C:/Users/giorg/Desktop/web%20site/download.html"

  window.location.replace="file:///C:/Users/giorg/Desktop/web%20site/index.html"
}
function AUTeams() {
  window.location.href="file:///C:/Users/giorg/Desktop/web%20site/Workinprogress.html"
}