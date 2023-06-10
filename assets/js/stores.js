var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openFullImg(pic){
    fullImgBox.style.display = 'flex';
    fullImg.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display = 'none';
}
let navbar = document.getElementById("navbar");
window.addEventListener('scroll',function(){
    if(this.scrollY > 100){
        navbar.classList.replace('bg-transparent','bg-dark');
        navbar.classList.add('shadow');
    }
    else{
        navbar.classList.replace('bg-dark','bg-transparent');
        navbar.classList.remove('shadow');
    }
});