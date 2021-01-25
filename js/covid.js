const APIURL="https://corona.lmao.ninja/v2/countries/india";

async function getRecords(url){
    const response = await fetch(url);
    const resData = await response.json();
   ShowRecords(resData);
}

getRecords(APIURL);

function ShowRecords(record){
  console.log(record);
  document.getElementById("main").innerHTML=
  `
   <h2>Covid Cases in India</h2>
   <div>
       <h3> Total cases</h3>  
       <div>${record.cases}</div>
   </div>   
   <div>
       <h3> Case Per Million</h3>  
       <div>${record.casesPerOneMillion}</div>
    </div>
   <div>
       <h3>Cases reported Today</h3>  
       <div>${record.todayCases}</div>
    </div
   <div>
       <h3>Total Recoverd</h3>  
       <div>${record.todayRecovered}</div>
   </div>   
   <div>
        <h3>Recoverd Per Million</h3>  
        <div>${record.recoveredPerOneMillion}</div>
   </div>   
   <div>
       <h3>Recoverd Today</h3>  
       <div>${record.todayRecovered}</div>
   </div>     
    <div>
       <h3>Total Death</h3>  
       <div>${record.deaths}</div>
    </div>   
   <div>
       <h3>Death Per Million</h3>  
       <div>${record.deathsPerOneMillion}</div>
    </div>   
    <div>
       <h3>Today Death</h3>  
       <div>${record.todayDeaths}</div>
    </div>   
  `
}