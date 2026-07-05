async function checkServer(){

const ip=document.getElementById("ip").value.trim();

if(ip===""){
alert("Enter server IP");
return;
}

const result=document.getElementById("result");

result.innerHTML="Loading...";

try{

const response=await fetch("https://api.mcsrvstat.us/2/"+ip);

const data=await response.json();

if(data.online){

result.innerHTML=`
<h2>🟢 Online</h2>

<p><b>IP:</b> ${data.hostname}</p>

<p><b>Players:</b> ${data.players.online}/${data.players.max}</p>

<p><b>Version:</b> ${data.version}</p>

`;

}else{

result.innerHTML="<h2>🔴 Offline</h2>";

}

}catch{

result.innerHTML="<h2>Error</h2>";

}

}