'use strict';

const api_key = 'c9974474abb54586f96e1e3ffec8004c';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/**
 * mengambil data dari server menggunakan 'url' dan melewatinya
 * hasil data JSON ke fungsi 'callback',
 * bersama dengan parameter opsional jika memiliki 'optionalParam'
 */

const fetchDataFromServer = function(url, callback, optionalParam){
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data, optionalParam));
}
export { imageBaseURL, api_key, fetchDataFromServer};
