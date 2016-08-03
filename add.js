// var addLink = document.getElementById("link-add");
// var addView = document.getElementById("add-view");

// addLink.addEventListener("click", function() {
//   homeView.classList.add("hidden");
//   listView.classList.add("hidden");

//   addView.classList.add("visible");
//   addView.classList.remove("hidden");

// });

// from Debbie
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  addView.classList.remove("hidden");
  addView.classList.add("visible");
  listView.classList.add("hidden");
  listView.classList.remove("visible");

});
