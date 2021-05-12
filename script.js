const searchBtn = document.querySelector('.search')
const search = document.getElementById("search-form");
const scrollToTop = document.getElementById('back-to-top');
const width = window.matchMedia('(max-width: 576px)');
const menu = document.getElementById('navbar');
const openM = document.getElementById("openMenu");
const closeM = document.getElementById("closeMenu");
let inputActive = false;

window.onscroll = () => scrollCheck()
const scrollCheck = () => {
    console.log(document.body.scrollTop)
    if (document.body.scrollTop > 200 ||
        (document.documentElement.scrollTop > 200 && !width.matches)) {
        scrollToTop.style.display = 'flex';
    } else {
        scrollToTop.style.display = 'none';
    }
}

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

//eventlistener on search button that creates an input element and appends it to the div class="search"
searchBtn.addEventListener('click', function () {
    if (!inputActive) {
        var inputEl = document.createElement('input');
        inputEl.style.opacity = '0';
        inputEl.classList.add('search');
        inputEl.style.cssText = "position: absolute; opacity: 0; margin-top: 7rem; z-index: 5; left: -11rem; height: 3rem; width: 12rem; padding: 2rem";
        inputEl.setAttribute('placeholder', 'Search')
        var opacity = 0;
        searchBtn.appendChild(inputEl);

        setInterval(function () {
            if (inputEl.style.opacity >= 1) {
                return;
            }
            inputEl.style.opacity = opacity;
            opacity += 0.08;
        }, 10);
    }
    inputActive = true;
})



//window listens to click events and removes input field if element clicked is not the search icon or search input
window.addEventListener('click', function (ev) {
    if (!ev.target.classList.contains('fa-search') && !ev.target.classList.contains('search')) {
        searchBtn.innerHTML = `<i class="fas fa-search"></i>`;
        inputActive = false;
    }
})

const openMenu = () => {
    openM.classList.toggle("hide");
    closeM.classList.toggle("hide");
    menu.style.display = 'block';
}

const closeMenu = () => {
    closeM.classList.toggle("hide");
    openM.classList.toggle("hide");
    menu.style.display = 'none';
}