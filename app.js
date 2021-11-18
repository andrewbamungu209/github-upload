const menuBtn = document.querySelector(".menu-btn");
const menuOnly = document.querySelector(".menu");
const menuClose = document.querySelector(".close-btn");
const searchIcon= document.querySelector(".search-icon")
const searchBar = document.querySelector(".search")
const removeSearch = document.querySelector(".remove-search")

menuBtn.addEventListener("click", function(){
    menuOnly.classList.add('add');
});

menuClose.addEventListener("click", function(){
    menuOnly.classList.remove('add');
});

 searchIcon.addEventListener("click", function(){
    searchBar.classList.add('toggle')
});

removeSearch.addEventListener("click", function(){
    searchBar.classList.remove('toggle')
})