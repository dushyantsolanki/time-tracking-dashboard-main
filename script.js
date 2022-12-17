let b = document.getElementsByTagName("a")[0];
let c = document.getElementsByTagName("a")[1];
let d = document.getElementsByTagName("a")[2];

b.addEventListener("click", (e) => {
  // color set when we click

  b.style.color = "hsl(236, 100%, 87%)";

  //   innerHTML added

  // for  Work
  a2.innerHTML = "5hrs";
  a3.innerHTML = "Last Day - 7hrs";

  // play
  b2.innerHTML = "1hrs";
  b3.innerHTML = "Last Day - 2hrs";

  // study
  c2.innerHTML = "0hrs";
  c3.innerHTML = "Last Day - 1hrs";

  // Exersis
  d2.innerHTML = "1hrs";
  d3.innerHTML = "Last Day - 1hrs";

  // Social

  e2.innerHTML = "1hrs";
  e3.innerHTML = "Last Day - 3hrs";

  //  Self care

  f2.innerHTML = "0hrs";
  f3.innerHTML = "Last Day - 1hrs";
});

c.addEventListener("click", (e) => {
  // color set when we click

  c.style.color = "hsl(236, 100%, 87%)";

  //   innerHTML added

  // Work
  a2.innerHTML = "32hrs";
  a3.innerHTML = "Last Week - 36hrs";

  // play
  b2.innerHTML = "10hrs";
  b3.innerHTML = "Last Week - 8hrs";

  // study
  c2.innerHTML = "4hrs";
  c3.innerHTML = "Last Week - 7hrs";

  // Exersis
  d2.innerHTML = "4hrs";
  d3.innerHTML = "Last Week - 5hrs";

  // Social

  e2.innerHTML = "5hrs";
  e3.innerHTML = "Last Week - 10hrs";

  //  Self care

  f2.innerHTML = "2hrs";
  f3.innerHTML = "Last Week - 2hrs";
});

d.addEventListener("click", (e) => {
  // color set when we click

  d.style.color = "hsl(236, 100%, 87%)";

  //   innerHTML added

  // Work
  a2.innerHTML = "23hrs";
  a3.innerHTML = "Last Month - 29hrs";

  // play
  b2.innerHTML = "23hrs";
  b3.innerHTML = "Last Month - 29hrs";

  // study
  c2.innerHTML = "13hrs";
  c3.innerHTML = "Last Month - 19hrs";

  // Exersis
  d2.innerHTML = "11hrs";
  d3.innerHTML = "Last Month - 18hrs";

  // Social

  e2.innerHTML = "21hrs";
  e3.innerHTML = "Last Month - 23hrs";

  //  Self care

  f2.innerHTML = "7hrs";
  f3.innerHTML = "Last Month - 11hrs";
});
