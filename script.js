const items = document.getElementsByClassName("accord__item");

for (let i = 0; i < items.length; i++) {
  let header = items[i].firstElementChild; //targets 1st child node of accord item
  header.addEventListener("click", function () {
    let answer = this.nextElementSibling; //targets the next child node of accord item
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      this.lastElementChild.innerHTML = "+";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      this.lastElementChild.innerHTML = "-";
    }
  });
}