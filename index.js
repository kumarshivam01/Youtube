
function black(){


var res=document.querySelector("body");
res.style.backgroundColor="black";
var nav=document.querySelector("#con1")
nav.style.color="white";
var nav1=document.querySelector("#con2")
nav1.style.color="white";


}


let key="AIzaSyCbnJm23l_LXdtjxkGxdl3xuQFh9nmG_Y8";
async function showdata(){

let input=document.querySelector("#search").value
let res=await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${input}&type=videos&part=snippet&maxResults=15`);
let data=await res.json();
data=data.items;
mapping(data);

console.log(data);


}



var arr=[];
function mapping(data){
    document.querySelector("#con2").innerHTML="";
data.map((ele)=>{

let div1=document.createElement("div")
div1.style.border="1px solid none";
div1.addEventListener("click",myfun);



let div2=document.createElement("div");
div2.style.border="1px solid none";




let image=document.createElement("img")
image.src=ele.snippet.thumbnails.high.url;
image.style.width="100%";
image.style.height="160px";


let div3=document.createElement("div");


let p1=document.createElement("p");
p1.textContent=ele.snippet.title;p1.style.padding="5px"

div2.append(image);
div3.append(p1);
div1.append(div2,div3)
document.querySelector("#con2").append(div1);
 
// function myfun(){

//     window.location.href="view.html";
        
        
        
//         }



function myfun(){
 
    localStorage.setItem("You",JSON.stringify(ele));
    window.location.href=`view.html`;

}
})

localStorage.setItem("Youtube",JSON.stringify(data));

}
