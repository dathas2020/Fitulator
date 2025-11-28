const div0 = document.getElementById("arrange0");
const div1 = document.getElementById("arrange1");
const div2 = document.getElementById("arrange2");

document.getElementById("arrange-0").addEventListener("click",function(){
    div0.style.display = 'flex';
    div1.style.display = 'none';
    div2.style.display = 'none';
});

document.getElementById("arrange-1").addEventListener("click",function(){
    div0.style.display = 'none';
    div1.style.display = 'flex';
    div2.style.display = 'none';
});

document.getElementById("arrange-2").addEventListener("click",function(){
    div0.style.display = 'none';
    div1.style.display = 'none';
    div2.style.display = 'flex';
});
const imagesToPreload = [
    'weightloss1.png',
    'weightgain.jpg',
    'maintainence.jpg'
];
imagesToPreload.forEach(function(src) {
    const img = new Image();
    img.src = src;
});