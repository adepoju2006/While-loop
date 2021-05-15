var password = "wordpass";
var responce;
var entryCount = 0;
var entryLimit = 1000000000000000000000000000000000000000000000000000000;
var error = false;

while (responce != password && !error) {
  if (entryCount < entryLimit) {
    responce = window.prompt("Enter Password");
    entryCount++;
  } else {
    error = true;
  }
}

if (error) {
  alert("Too many Entries");
} else {
  alert("You got it");
}
