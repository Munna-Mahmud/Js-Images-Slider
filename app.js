const images= [
'images/about-img3.png',
'images/about-img4.png',
'images/about-img5.png',
'images/about-img6.png',

]
let imgIndex= 0;
const elements= document.getElementById('slider-img');
setInterval ( () =>{
    if(imgIndex >= images.length){
        imgIndex= 0;
    }
    const imgUrl=images[imgIndex]
    elements.setAttribute('src', imgUrl)
 imgIndex++
}, 1000)