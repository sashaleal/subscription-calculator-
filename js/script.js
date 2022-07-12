// Your JS code here
let subTypeElement = document.querySelector(".subscription-select");
let subDurationElement = document.querySelector(".duration-select");
let result = document.querySelector(".result");
let subType = "basic";
let subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = e.target.value;
  //console.log(subDuration);
  updateSubscriptionDiv();
});

let updateSubscriptionDiv = function () {
  let monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  }
  if (subType === "premium") {
    monthlyCost = 10;
  }

  let total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
