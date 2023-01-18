function act() {
  var x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

export default act;
