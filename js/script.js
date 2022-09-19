const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch ("https://picsum.photos/v2/list?limit=100");
    //this enables communication btw my program and API
    const images = await res.json(); 
    //this parses data captured in res using json
    //console.log(images);
    selectRandomImage(images); //called selectRandomImage and passed it to images
};


                        //NEXT....


//You’ll create a function that randomly chooses one of the objects in 
//the images array. You’ll use Math.random() and multiply it by the length 
//of the array, which is 100. Then, you’ll use Math.floor() to round the 
//number down to a whole number, aligning with one of the index positions. 
//You’ll round down because you want to get a number between 0 and 99, not 
//between 1 and 100. Even though there are 100 elements in the array, arrays 
//start with 0, so an index of 100 wouldn’t be valid.



const selectRandomImage = async function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    //inside Math.floor, mulitply Math.random by the lengeth of images
    //this is to round down

    //console.log(randomIndex); //to see its pulling a random number
    const randomImage = images[randomIndex];
    //to grab a single image from the images array
   // console.log(randomImage); //you'll see info for a random image author etc
   displayImage(randomImage);
};


                        //NEXT....

//this function will be accepting the random image object that 
//contains all the properties listed above
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress; //set the src attrubute of img to imageAddress
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function() {
    getImage(); //cut from first function so program won't retrieve the API data until button is clicked
});
