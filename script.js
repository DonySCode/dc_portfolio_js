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
document.querySelector(".show-more").addEventListener("click", () => {
    document.querySelector(".read-more").classList.toggle("read-more-block");

  });
