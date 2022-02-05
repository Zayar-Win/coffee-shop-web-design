let navbar = document.querySelector(".navbar");

document.querySelector("#bar-btn").onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartContainer.classList.remove('active');
}
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = ()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartContainer.classList.remove('active');
}

let cartContainer = document.querySelector(".cart-items-container");

document.querySelector("#shop-btn").onclick = ()=>{
    cartContainer.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartContainer.classList.remove('active');
}