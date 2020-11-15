var pics =[
    "certificateImages/001.jpg", //0
    "certificateImages/002.jpg", //1
    "certificateImages/003.jpg", //2
    "certificateImages/004.jpg", //3
    "certificateImages/005.jpg",
    "certificateImages/006.jpg",
    "certificateImages/007.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;  // 002.jpg

btn.addEventListener("click", function(){
    if(counter === 7){
        counter=0;
    }
    img.src= pics [counter];
    counter = counter + 1;
});