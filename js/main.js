window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    let x = window.scrollY;
    if (x > 500) {
        nav.style.margin = "0 0 0"
    } else {
        nav.style.margin = "-100px 0 0"
    }
})

let imgs = document.querySelectorAll(".flex .card1 .image img")
let price = document.querySelectorAll(".red")
let title = document.querySelectorAll(".card-body h4");
let button = document.querySelectorAll(".button button");
let spanCount = document.querySelector(".end i span")

let list;
if (localStorage.getItem("card") == null) {
    list = []
} else {
    list = JSON.parse(localStorage.getItem("card"))
    spanCount.innerHTML = list.length
}

for (let i = 0; i < button.length; i += 1) {
    button[i].addEventListener("click", function () {
        let object1 = {
            id: Date.now(),
            img: imgs[i].src,
            price: price[i].textContent,
            title: title[i].textContent
        }
        list.push(object1)
        spanCount.innerHTML = list.length
        window.localStorage.setItem("card", JSON.stringify(list))
    })
}