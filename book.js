let product=JSON.parse(localStorage.getItem('data'))||[]
let cart = JSON.parse(localStorage.getItem('cart')) || []


const uimaker=(product)=>{

    document.getElementById("box").innerHTML="";
   
        product.map((ele,i) => {
      

        let title=document.createElement("h1")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img

        let category=document.createElement("p")
        category.innerHTML=ele.category

        let price=document.createElement("p")
        price.innerHTML=ele.price

        let buy=document.createElement("button")
        buy.innerHTML="buy"

        
        buy.addEventListener("click",()=>{
            window.location.href="/buy.html";
            cart.push(ele)
            localStorage.setItem("cart",JSON.stringify(cart));
    
          })
        

        let del=document.createElement("button")
        del.innerHTML="delete"
  
      
        del.addEventListener("click",()=>{
          product.splice(i,1)
          uimaker(product);
          localStorage.setItem("data",JSON.stringify(product));
         
  
        })
         
        
    
         
        let div=document.createElement("div")
        div.append(title,img,category,price,buy,del)

        div.setAttribute("class","data");


        document.getElementById("box").append(div)

    })
     
    }
    uimaker(product)


    const handalsorting=(val)=>{
      if(val=="htl"){
          product.sort((a,b)=>b.price-a.price)
         uimaker(product)
      }
  }
  const handalsortingg=(val)=>{
      if(val=="lth"){
          product.sort((a,b)=>a.price-b.price)
         uimaker(product)
      }
  
  }

  
  const handalfilter=(value)=>{
    let temp=product.filter((ele)=>ele.category==value)
    uimaker(temp);
}



const search=(value)=>{
  let temp=product.filter((ele)=>ele.title==value)                            
  uimaker(temp)
}
const handalserch=(e)=>{
  e.preventDefault()
  let val=document.getElementById("value").value
  console.log(val)
  search(val)
}

  document.getElementById("htl").addEventListener("click",()=>handalsorting("htl"))
document.getElementById("lth").addEventListener("click",()=>handalsortingg("lth"))
document.getElementById("science").addEventListener("click",()=>handalfilter("science"))
document.getElementById("classic").addEventListener("click",()=>handalfilter("classic"))
document.getElementById("horror").addEventListener("click",()=>handalfilter("horror"))
document.getElementById("fairy").addEventListener("click",()=>handalfilter("fairy"))
document.getElementById("search").addEventListener("submit",handalserch)