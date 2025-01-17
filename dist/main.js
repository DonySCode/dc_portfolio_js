"use strict";

var AllItems = document.querySelectorAll(".nav-items li a");
AllItems.forEach(function (item) {
  item.addEventListener("click", function () {
    RemoveActive();
    item.classList.add("navActive");
  });
});
function RemoveActive() {
  AllItems.forEach(function (item) {
    item.classList.remove('navActive');
  });
}
document.querySelector(".show-more").addEventListener("click", function () {
  document.querySelector(".read-more").classList.toggle("read-more-block");
  if (document.querySelector(".read-more").classList.contains("read-more-block")) {
    document.querySelector(".show-more").textContent = "Close";
  } else {
    document.querySelector(".show-more").textContent = "Show More";
  }
});

// Skills
var AllTabs = document.querySelectorAll('.skills-tab');
AllTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tab.querySelector('.skills-items').classList.toggle('skills-items-show');
    tab.querySelector('.right').classList.toggle('icon-item');
  });
});

//NavItems
var navItems = document.querySelector('.nav-items');
var OpenMenu = document.querySelector('.open');
var CloseMenu = document.querySelector('.close');
OpenMenu.addEventListener('click', function () {
  navItems.classList.add('navShow');
  OpenMenu.style.display = 'none';
  CloseMenu.style.display = 'inline-block';
});
CloseMenu.addEventListener('click', function () {
  navItems.classList.remove('navShow');
  OpenMenu.style.display = 'inline-block';
  CloseMenu.style.display = 'none';
});