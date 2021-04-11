var btn=document.getElementById("btn");
btn.onclick=function(){
    event.preventDefault();
    var country=document.getElementById("country").value;
    var start=document.getElementById("start").value;
    var end=document.getElementById("end").value;

    console.log(start);

    if(country=='' || start=='' || end=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+start+"T00:00:00Z&to="+end+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            var length=res.length;
            var i=length-1;

            var showC=res[i].Confirmed;
            var showA=res[i].Active;
            var showD=res[i].Deaths;

             //var div=document.getElementById("div")
             var div = document.createElement("div");
             div.setAttribute("id","div");
             div.innerHTML+="<div class=\"alldata\">Confirmed Cases : "+showC+"</div>"+"<div class=\"alldata\">Active Cases : "+showA+"</div>"+"<div class=\"alldata\">Death Cases : "+showD+"</div>"	
    
             document.body.appendChild(div);
   
        })
    }
}