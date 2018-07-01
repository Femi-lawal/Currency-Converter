//Registering Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => { 
      console.log('Service Worker Registered'); 
    }).catch((err) => {
      console.log("Service Worker failed to Register with error: " + err);
    });
}

//Open Database
function openDatabase(){
//Return DB instances
const DB_NAME = 'alc-currencyconverter-db';
const database = IndexedDB.open(DB_NAME, 1);
//On error catchc errors
database.onerror = (event) => {
  console.log('error opening currency database');
  return false;
};
//check db version
database.onupgradeneeded = function(event) {
//listen for the event response
const upgradeDB = event.target.result;
//Create an objectStore for this database
const objectStore = upgradeDB.createObjectStore("currency");
};
//Return db instance
return database;
}
