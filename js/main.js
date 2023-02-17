/* adds event listener to all elements of "collapsible" class: once clicked, 
toggles "collapsible--expanded" class to element */

const collapsibles = document.querySelectorAll(".collapsible");
//return NodeList of all elements with "collapsible" class

//iterates through NodeList, adds event Listener to each item, toggling "collapsible--expanded" class to it on-cliok
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
