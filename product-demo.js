function check(form)
{
            if(form.desc.value=="")
            {
                alert("Please enter a brief description about your product");
                return(false);
            }
            if(form.price.selectedIndex==0)
            {
                alert("Please select an appropriate price range for your product");
                return(false);
            }
            if(form.city.selectedIndex==0)
            {
                alert("Please select a city");
                return(false);
            }
            if(confirm("Do you want to continue?"))
            {   
                prompt("Are you satisified with our service?\n Please give some comment as feedback");
                alert("Your product demo has been submitted succesfully");
                return(true);
            }
            else
            {
                return(false);
            }
}

        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        }

        function clock(){
        var refresh=1000; // Refresh rate in milli seconds
        mytime=setTimeout('currentTime()',refresh)
        }

        function currentTime() {
        var x = new Date()
        var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
        x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
        document.getElementById('date_and_time').innerHTML = x1;
        clock();
        }