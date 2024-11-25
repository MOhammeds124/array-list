window.addEventListener("load",initialize)
window.addEventListener("load",addlistener)
let userlist=[]
let counter= 0
let dislist= document.getElementById("orderlist")
function initialize() 
{
	document.getElementById("userinput").value=""
	document.getElementById("userinput").focus() 
}
function addlistener() 
{
	document.getElementById("btnsubmit").addEventListener("click",addlistitem)
	document.getElementById("btndisplay").addEventListener("click",displaylist)
}
function addlistitem() 
{
	let uservalue=""
 	uservalue=document.getElementById("userinput").value 
	if(uservalue=="")
	{
		alert("please inputs somthing in the box") 
		initialize() 
	}
	else 
	{
		userlist.push(uservalue)
		alert("input: "+ userlist[counter] +" has been added")
		counter= counter+1
		initialize()
	}
}
function displaylist() 
{
	let arraylength = userlist.length;
	if(userlist==0)
		{
			alert("please put somthing in the list")
			initialize()
		}
	else
	{document.getElementById("askinfo").style.display= "none";
	let dislist= document.getElementById("orderlist");
	for (let i=0; i<arraylength; i++)
		{
			let li= document.createElement("li");
			li.innerText= userlist[i];
			dislist.appendChild(li);
		}}
}
