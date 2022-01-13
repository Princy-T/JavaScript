const sliderSlide = document.querySelector('.slider-slide');
const sliderImages = document.querySelectorAll('.slider-slide img');
const prevButton = document.querySelector('#prevbutton');
const nextButton = document.querySelector('#nextbutton');

let count = 1;
const size = sliderImages[0].clientWidth;
sliderSlide.style.transform = 'translateX(' + (-size * count) + 'px)'; 

nextButton.addEventListener('click',()=>
{
    if (count >= sliderImages.length -1) return;
    sliderSlide.style.transition = "transform 0.4s ease-in-out";
    count++; 
    sliderSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
});

prevButton.addEventListener('click',()=>
{
    if (count <= 0) return; 
    sliderSlide.style.transition = "transform 0.4s ease-in-out";
    count--; 
    sliderSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
});

sliderSlide.addEventListener('transitionend', ()=>
{
    if (sliderImages[count].id === 'lastslide')
    {
        sliderSlide.style.transition = "none";
        count = sliderImages.length -2;
        sliderSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
    if (sliderImages[count].id === 'firstslide')
    {
        sliderSlide.style.transition = "none";
        count = sliderImages.length - count;
        sliderSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
});