

function checkempty(){
if(document.getElementsByName("firstname")[0].value == "")
	{
	document.getElementsByName("firstname")[0].style.borderColor="#b94a48";
	document.getElementById("i1").style.visibility="visible";
	}
if(document.getElementsByName("surname")[0].value == "")
	{
	document.getElementsByName("surname")[0].style.borderColor="#b94a48";
	document.getElementById("i2").style.visibility="visible";
	}

if(document.getElementsByName("email")[0].value == "")
	{
	document.getElementsByName("email")[0].style.borderColor="#b94a48";
	document.getElementById("i3").style.visibility="visible";
	}

if(document.getElementsByName("password")[0].value == "")
	{
	document.getElementsByName("password")[0].style.borderColor="#b94a48";
	document.getElementById("i4").style.visibility="visible";
	}


}