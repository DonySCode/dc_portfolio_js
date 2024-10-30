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

// Contact Form -- This is totally intentional.
document.getElementById('ContactForm').addEventListener('submit', ev => {
    ev.preventDefault();
    const contact = Object.fromEntries(new FormData(ev.target));
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic YXBpOmFmY2E2NDMxN2QyYmJmMDcxYTY1OTgzNzI1YmM0MzdhLTcyZTRhM2Q1LTYwN2UzOGU1`);
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("https://api.mailgun.net/v3/donycastro.me/messages?" +
        "from=admin@donycastro.me&" +
        `to=donycastro80@gmail.com&` +
        `subject=New Message from ${contact.name}, ${contact.email}&` +
        `text=${contact.message}`, requestOptions)
        .then(() => alert('Message successfully sent!'))
        .catch((error) => console.error(error));
})
