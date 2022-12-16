const button = document.querySelector("#button");
const heading = document.querySelector(".card-heading");
const advice = document.querySelector("#advice");

const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  heading.innerHTML = `advice #${data.slip.id}`;
  advice.innerHTML = data.slip.advice;
  console.log(data);
};

getAdvice();

button.addEventListener("click", getAdvice);
