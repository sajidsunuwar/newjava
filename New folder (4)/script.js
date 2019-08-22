

function fac ()
{
	var num=parseInt(prompt("Enter num "))
	fact=1;

	for(i=1;i<=num;i++)
	{
		fact=fact*i;
	}
	alert("The factorial of" +num+ "is" +fact);
}

function mulTable()
{
	var num=parseInt(prompt("Enter num"))
	for (i=1;i<=10;i++)
	{
		mul=num*i;
		document.getElementById('multable').
			innerHTML+=num + "x"+ i+ "="+ mul + "<br/>"
	}
}

function currentDate()
{
	var d=new Date();
	var day=d.getDay();
	var date=d.getDate();
	var month=d.getMonth();
	var year=d.getFullYear();

	if (day==0) day="Sunday";
	else if (day==1) day="Monday";
	else if (day==2)day="Tuesday";
	else if (day==3) day="Wednesday";
	else if (day==4) day="Thursday";
	else if (day==5)ay="Friday";
	else if (day==6) day="Saturday";

	if (month==0) month="January";
	else if (month==1) month="February";
	else if (month==2) month="March";
	else if (month==3) month="April";
	else if (month==4) month="May";
	else if (month==5) month="June";
	else if (month==6) month="July";
	else if (month==7) month="August";
	else if (month==8) month="September";
	else if (month==9) month="October";
	else if (month==10)month="November";
	else if (month==11)month="December";

	document.getElementById('currentDate').
		innerHTML=day+ "," + ""+ date+ ""+month+""+year;

	refreshTime();
}

function currentTime()
{
	var t=new Date();
	var hh=t.getHours();
	var mm=t.getMinutes();
	var ss=t.getSeconds();
	var ampm=hh<=11?"AM":"PM";
	document.getElementById('hh').innerHTML=hh;
	document.getElementById('mm').innerHTML=mm;
	document.getElementById('ss').innerHTML=ss + " "+ampm;
}

function refreshTime()
{
	setInterval(currentTime, 1000);
}