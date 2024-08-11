let advice = document.getElementById("advice-tips");
let adviceNum = document.getElementById("advice-number");

const btn_Element = document.getElementById("btn-element");
btn_Element.addEventListener("click", () => {
  const myURL = fetch("https://api.adviceslip.com/advice")
    .then((value) => {
      if (value.ok) {
        return value.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((json) => {
      advice.innerText = `${json.slip.advice}`;
      adviceNum.innerText = `#${json.slip.id}`;
    })
    .catch((err) => console.log(err));
});
