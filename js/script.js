const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch ("https://picsum.photos/v2/list?limit=100");
    //this enables communication btw my program and API
    const images = await res.json(); 
    //parsed data captured in res using json
    console.log(images);
};
getImage();
