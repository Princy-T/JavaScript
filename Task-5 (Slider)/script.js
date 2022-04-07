var slideIndex = 1;
slideShow(slideIndex);

function plusSlides(n) 
{
  slideShow(slideIndex = n++);
}

function currentSlide(n)
{
  slideShow(slideIndex == n);
}

function slideShow(n) 
{
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("navigation-dot");
    if (n > slides.length) 
    {
        slideIndex = 1
    }    
    if (n < 1) 
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
