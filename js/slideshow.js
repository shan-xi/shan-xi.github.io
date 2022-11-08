export class ShowSlides {
    constructor (params){
        this.slideIndex = 1;
        this.slide_class = params['slide_class'];
        this.showSlides(this.slideIndex);
    }
    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    // Thumbnail image controls
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }
    showSlides(n) {
        let i;
        let slides = document.getElementsByClassName(this.slide_class);
        if (n > slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex-1].style.display = "block";
    }
}




