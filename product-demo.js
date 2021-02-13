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