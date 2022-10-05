/* adds event listener to all elements of "collapsible" class: once clicked, 
toggles "collapsible--expanded" class to element */

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
