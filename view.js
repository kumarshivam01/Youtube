function black(){


  var res=document.querySelector("body");
  res.style.backgroundColor="black";
  var nav=document.querySelector("#con2")
  nav.style.color="white";
  var nav1=document.querySelector("#con3")
  nav1.style.color="white";
  var nav2=document.querySelector("#con3>div")
  nav2.style.border="1px solid grey"
  
  
  }
  var arr1=JSON.parse(localStorage.getItem("Youtube"))||[];
var arr=JSON.parse(localStorage.getItem("You"))||[];
console.log(arr);




hello();
function hello(){


        let div1=document.createElement("div")
        div1.style.border="1px solid none";
        


        let  iframe=document.createElement("iframe");

        let videoId=arr.id.videoId;

        iframe.src=`https://www.youtube.com/embed/${videoId}`;
        iframe.setAttribute("id","view");
        iframe.setAttribute("allowfullscreen",true)
        iframe.width="100%";
        
        let p1=document.createElement("p");
        p1.textContent=arr.snippet.title;
        p1.style.padding="5px";
        p1.style.fontSize="25px";

        let p2=document.createElement("p");
        p2.textContent=arr.snippet.channelTitle;
        p2.style.padding="5px";
        
          div1.append(iframe,p1,p2);
       
        document.querySelector("#con2").append(div1);
      }
        

function mapping(){
arr1.map((ele)=>{

  let di1 =document.createElement("div");
  di1.style.display="flex";
  di1.style.height="170px"
  di1.style.marginTop="10px";
   di1.addEventListener("click",fun)
  
let ima=document.createElement("img")
ima.setAttribute("src",ele.snippet.thumbnails.high.url);
ima.style.width="70%";
ima.style.height="100%";

let p1=document.createElement("p");
p1.textContent=ele.snippet.title;
p1.style.padding="5px";


di1.append(ima,p1);
document.querySelector("#con3").append(di1);

function fun(){
  localStorage.setItem("You",JSON.stringify(ele));
  window.location.href="view.html";



}

})

}
   
  mapping();

  