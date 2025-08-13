let key="3503f7a34b244582a643cb7f62e4ede0";
let cardData=document.querySelector(".cardData");
let searchbtn=document.getElementById("searchbtn");
let inputData=document.getElementById("inputData");
let searchType=document.getElementById("type");
const getdata = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData=await res.json()
    console.log(jsonData.articles);
    searchType.innerText="Search : "+input;
    inputData.value="";
    cardData.innerHTML="";

    jsonData.articles.forEach(function(article){
        console.log(article);
        
        let divs = document.createElement("div");
        divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML=`
    <img src="${article.urlToImage}" alt="">
    <h2>${article.title}</h2>
    <p>${article.description}</p>
    
    `
    divs.addEventListener("click",function(){
        window.open(article.url);
    })
       
    
    })

}
window.addEventListener("load",function(){
    getdata("india");
})
window.
searchbtn.addEventListener("click",function(){
    let inputText=inputData.value;
    getdata(inputText);
})
function navClick(navName){
    if(navName=="politics"){
        document.getElementById("politics").style.color="blue";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
    }
    if(navName=="sports"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="blue";
        document.getElementById("technology").style.color="white";
    }
    if(navName=="technology"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="blue";
    }
    getdata(navName);
 }
