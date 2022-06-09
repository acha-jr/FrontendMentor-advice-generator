const generator = document.querySelector(".generator");

const fetchData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((resp) => {
      return resp.json();
    })
    .then((advice) => {
      generate(advice);
    });
};

const generate = (data) => {
  const advice = document.querySelector("p");
  const id = document.querySelector("span");
  id.textContent = data.slip.id;
  advice.textContent = data.slip.advice;
};

generator.addEventListener("click", fetchData);
window.addEventListener("load", fetchData);
