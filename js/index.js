window.onload=function(){

let index = 0;
let pages = document.querySelectorAll(".banner-box img")
let banner = document.querySelector(".banner-box")
let dots=document.querySelectorAll(".banner .slider-nav .spot")
banner.onmouseenter = function () {
    clearInterval(t)
}
banner.onmouseleave = function () {
    t = setInterval(run, 3000)
}
function run(status = "next") {
    if (status == "next") {
        index += 1
    } else if (status == "pre") {
        index -= 1
    }
    if (index > 5) {
        index = 0;
    }
    if (index < 0) {
        index = 5
    }
    pages.forEach(function (item, i) {
        item.classList.remove("active")
    })
    pages[index].classList.add("active")

    dots.forEach(function(item,i){
        item.classList.remove("active")
    })
    dots[index].classList.add("active")
}
let t = setInterval(run, 3000)

// 轮播点点击效果
dots.forEach(function(item,i){
    item.onmouseenter=function(){                     //item就是获取到的div
        dots.forEach(function(item){
            item.classList.remove("active")
        })
        item.classList.add("active")
        pages.forEach(function(item){
            item.classList.remove("active")
        })
        pages[i].classList.add("active")
    }
})




}