const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/allseenn');
xhr.send();

xhr.onload = function() {
  if (xhr.status !== 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`user: ${xhr.response}`);
  }
};

xhr.onprogress = function(event) {
  console.log(`Get from server: ${event.loaded} bytes`);
};

xhr.onerror = function() {
  console.log("Request error");
};
