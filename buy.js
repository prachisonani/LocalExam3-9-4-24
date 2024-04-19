let cart = JSON.parse(localStorage.getItem('cart')) || []

const uimaker = (product) => {

  document.getElementById("container").innerHTML = "";

  product.map((ele, i) => {


    let title = document.createElement("h3")
    title.innerHTML = ele.title

    let img = document.createElement("img")
    img.src = ele.img

    let category = document.createElement("p")
    category.innerHTML = ele.category


    let price = document.createElement("p")
    price.innerHTML = ele.price


    let del = document.createElement("button")
    del.innerHTML = "delete"


    del.addEventListener("click", () => {
      product.splice(i, 1)
      uimaker(product);
      localStorage.setItem("cart", JSON.stringify(product));


    })

    let div = document.createElement("div")
    div.append(img, title, category, price, del)
    document.getElementById("container").append(div)



  })

}


uimaker(cart)
