function check(form)
{
	if(form.first_name.value=="")
	{
		alert("Please enter a First Name");
		return(false);
	}
	if(form.gender.checked==false)
	{
		alert("Please select a gender");
		return(false);
	}
	if(form.user_name.value=="")
	{
		alert("Please enter a Username");
		return(false);
	}
	if(form.password.value=="")
	{
		alert("Please enter a Password");
		return(false);
	}

	var passcode = form.password.value;
	var l = passcode.length;

	if(l<8)
	{
		alert("Please enter a valid password");
		return(false);
	}
	if(form.confirm_password.value=="")
	{
		alert("Please confirm your password");
		return(false);
	}
	if(form.password.value!=form.confirm_password.value)
	{
		 alert("Passwords don't match");
		 return(false);
    }

    if(form.email_id.value=="")
    {
    	alert("Please enter a valid email id");
    	return(false);
    }

    var email = form.email_id.value;
    var i=0,atrate=0,dot=0;
    for(i=0;i<email.length;i++)
    {
    	if(email[i]=="@")
    	{
    		atrate=i;
    	}
    	if(email[i]==".")
    	{
    		dot=i;
    	}

    }

    if((dot==0)&&(atrate==0)&&(dot<=atrate))
    {
    	alert("Please enter a valid email id");
    	return(false);
    }
    if(confirm("Do you want to continue?"))
    {
        return(true);
    }
    else
    {
        return(false);
    }


	return(true);
}