'use strict';

/**
 * Tambahkan event di beberapa elemen
 */

const addEventOnElements = function(elements, eventType, callback){
    for(const elem of elements) elem.addEventListener(eventType,
        callback);
}

/**
 * Toggle search box di mobile device || layar kecil
 */

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
    searchBox.classList.toggle("active");
});

/**
 * store movieId in 'localStorage' when you click any movie
 * card
 * 
 * simpan movieId di 'localStorage' saat Anda mengklik film apa pun
 */

const getMovieDetail = function(movieId){
    window.localStorage.setItem("movieId", String(movieId));
}


const getMovieList = function(urlParam, genreName){
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName", genreName);
}