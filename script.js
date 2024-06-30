let AllItems = document.querySelectorAll(".nav-items li a");

AllItems.forEach(item => {
  item.addEventListener("click", () => {
    RemoveActive();
    item.classList.add("navActive");
  })
});

function RemoveActive(){
    AllItems.forEach(item=>{
        item.classList.remove('navActive')
    })
}
document.querySelector(".show-more").addEventListener("click", () => {
  document.querySelector(".read-more").classList.toggle("read-more-block");
  if (
    document.querySelector(".read-more").classList.contains("read-more-block")
  ) {
    document.querySelector(".show-more").textContent = "Close";
  } else {
    document.querySelector(".show-more").textContent = "Show More";
  }
});

// Skills
let AllTabs = document.querySelectorAll('.skills-tab');

AllTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tab.querySelector('.skills-items').classList.toggle('skills-items-show');
        tab.querySelector('.right').classList.toggle('icon-item');
    })
});

//NavItems
let navItems = document.querySelector('.nav-items');
let OpenMenu = document.querySelector('.open');
let CloseMenu = document.querySelector('.close')

OpenMenu.addEventListener('click', () => {
    navItems.classList.add('navShow');
    OpenMenu.style.display='none'
    CloseMenu.style.display='inline-block'
})

CloseMenu.addEventListener('click', () => {
    navItems.classList.remove('navShow');
    OpenMenu.style.display='inline-block'
    CloseMenu.style.display='none'
})