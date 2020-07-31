const hideNextBtn = () => {
  document.getElementById("nextbtn").style.visibility = "hidden";
};
const showNextBtn = () => {
  document.getElementById("nextbtn").style.visibility = "visible";
};
//------------
const disableNextBtn = () => {
  document.getElementById("nextbtn").disabled = true;
};
const enableNextBtn = () => {
  document.getElementById("nextbtn").disabled = false;
};
//------------
const showOutcome = (text) => {
  document.getElementById("outcome").style.visibility = "visible";
  document.getElementById("outcome").innerHTML = text;
};
const hideOutcome = () => {
  document.getElementById("outcome").style.visibility = "hidden";
};
//------------
const disableAllOptn = (limit) => {
  var k;
  for (k = 1; k <= limit; k++) {
    document.getElementById("option" + k).disabled = true;
  }
};
const enableAllOptn = (limit) => {
  var l;
  for (l = 1; l <= limit; l++) {
    document.getElementById("option" + l).disabled = false;
  }
};

exports = module.exports = {
  hideNextBtn,
  showNextBtn,
  disableNextBtn,
  enableNextBtn,
  showOutcome,
  hideOutcome,
  disableAllOptn,
  enableAllOptn,
};
