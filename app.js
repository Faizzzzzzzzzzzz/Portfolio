(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

// animate number
const counterNum = document.querySelectorAll(".large-text");
const speed = 2;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;

      setTimeout(updateNumber, 30);
    }
  };

  updateNumber();
});
