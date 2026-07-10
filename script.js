const spreadsheet = document.querySelector("table");
  
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
