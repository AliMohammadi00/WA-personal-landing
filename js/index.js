let mobileMenuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")
let cover = document.querySelector(".cover")
let resumeItems = document.querySelectorAll(".list__item")
let portfolioLink = document.querySelectorAll(".portfolio__link")
let chaneThemeBtn = document.querySelector(".change_theme")
let headerLis = document.querySelectorAll(".menu__link")
const sections = document.querySelectorAll("main > section")
mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle('menu-btn--active')
    menu.classList.toggle("menu--open")
    cover.classList.toggle("cover--active")
})
resumeItems.forEach(item => {
    item.addEventListener("click", e => {
        document.querySelector(".list__item--active").classList.remove('list__item--active')
        document.querySelector(".content__resume--acctive").classList.remove('content__resume--acctive')
        item.classList.add("list__item--active")
        let id = item.getAttribute("active-dontent-id")
        let content = document.querySelector("#" + id)
        content.classList.add("content__resume--acctive")
    })
})
portfolioLink.forEach(portfolio => {
    portfolio.addEventListener("click", () => {
        document.querySelector(".portfolio__link--active").classList.remove("portfolio__link--active")
        document.querySelector(".portfolio-content__wrapper--active").classList.remove("portfolio-content__wrapper--active")
        portfolio.classList.add('portfolio__link--active')
        let id = portfolio.getAttribute("show-portfolio-id")
        let portfolioContainer = document.querySelector("#" + id)
        portfolioContainer.classList.add("portfolio-content__wrapper--active")
    })
})

chaneThemeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark--theme")
})
headerLis.forEach(li => {
    li.addEventListener("click" , () => {
        document.querySelector(".menu__link--active").classList.remove("menu__link--active")
        li.classList.add("menu__link--active")
    })
})

const observer = new IntersectionObserver(observerHandeler, {
    threshold: 0.5
})
function observerHandeler (allSeactions){
    allSeactions.map(section => {
        let sectionClassName = section.target.className
        if(section.isIntersecting){
            document.querySelector(`.menu__item[hover-section=${sectionClassName}]>a`).classList.add("menu__link--active")
        }else{
            document.querySelector(`.menu__item[hover-section=${sectionClassName}]>a`).classList.remove("menu__link--active")
        }
    })
}
sections.forEach(section => {
    observer.observe(section)
})