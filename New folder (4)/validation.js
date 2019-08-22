function validateForm()
{
	var username=document.login.uname.value;
	var password=document.login.upass.value;

	if(username=="" && password=="")
	{
		document.getElementById('error').innerHTML="Username and Password is Required";
		return false;
	}
	else if(username=="")
	{
		document.getElementById('error').innerHTML="Username is Required";
		return false;
	}
	else if(password=="")
	{
		document.getElementById('error').innerHTML="Password is Required";
		return false;
	}
	else if(username.length<5 || password.length<5)
	{
		document.getElementById('error').innerHTML="Username and Password should have min 5 characters";
		return false;
	}
	else if(username=="admin" && password=="admin")
	{
		document.getElementById('error').innerHTML="Login Success";
		setTimeout(function()
		{
			window.location.href='https://facebook.com'}, 1000)
		return false;
	}
	else
	{
		document.getElementById('error').innerHTML="Unexpected Error";
		return false;
	}
	return false;
}