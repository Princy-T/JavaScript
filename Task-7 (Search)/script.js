let products = 
{
    data:[
        {
            productName: "Red Corving Earring",
            category: "Jimin",
            price: "69.67",
            image: "jimin-earring.jpg",
        },
        {
            productName: "With You Hoodie",
            category: "Jimin",
            price: "91.97",
            image: "jimin-hoodie.png",
        },
        {
            productName: "Brooch Set (Faces)",
            category: "V",
            price: "32.51",
            image: "v-face.jpg",
        },
        {
            productName: "Brooch Set (Flowers)",
            category: "V",
            price: "41.80",
            image: "v-flowers.jpg",
        },
        {
            productName: "Brooch Set (Cloud Drops)",
            category: "V",
            price: "32.51",
            image: "v-cloud.jpg",
        },
        {
            productName: "Mute Boston Bag",
            category: "V",
            price: "153.28",
            image: "v-bag.jpg",
        },
        {
            productName: "Mikro Kosmos Mood Lamp",
            category: "JKook",
            price: "143.99",
            image: "jkook-lamp.jpg",
        },
        {
            productName: "Armyst-Zip up Hoodie",
            category: "JKook",
            price: "125.41",
            image: "jkook-hoodie.jpg",
        },
        {
            productName: "Side by side Mini Bag",
            category: "JHope",
            price: "116.12",
            image: "jhope-bag.jpg",
        },
        {
            productName: "Hope Pot Set",
            category: "JHope",
            price: "54.81",
            image: "jhope-pot.jpg",
        },
        {
            productName: "Good Day / Bad Day Pajama Blue",
            category: "Jin",
            price: "110.55",
            image: "jin-pajama-2.jpg",
        },
        {
            productName: "Good Day / Bad Day Pajama Black",
            category: "Jin",
            price: "110.55",
            image: "jin-pajama-1.jpg",
        },
        {
            productName: "Pillow",
            category: "Jin",
            price: "64.10",
            image: "jin-pillow.jpg",
        },
        {
            productName: "Bungeo - Ppang Wind Chime",
            category: "RM",
            price: "52.00",
            image: "rm-ppang.jpg",
        },
        {
            productName: "Army Jogger Pants",
            category: "RM",
            price: "88.00",
            image: "rm-pants.jpg",
        },
        {
            productName: "Gguitarpick Necklace",
            category: "Suga",
            price: "88.00",
            image: "suga-chain.jpeg",
        },
        {
            productName: "Black Note and Cover Set",
            category: "Suga",
            price: "72.00",
            image: "suga-note.jpeg",
        },
    ],
}; 

for(let i of products.data)
{
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    let container = document.createElement("div");
    container.classList.add("container");
    
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6"); 
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value)
{
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => 
    {
        if(value.toUpperCase() == button.innerText.toUpperCase())
        {
            button.classList.add("active");
        }
        else
        {
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(value == "all")
        {
            element.classList.remove("hide");
        }
        else
        {
            if(element.classList.contains(value))
            {
                element.classList.remove("hide");
            }
            else
            {
                element.classList.add("hide");
            }
        }
    }); 
}

document.getElementById("search").addEventListener("click", () => {
    let searchinput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card"); 
    elements.forEach((element,index) => {
        if(element.innerText.includes(searchinput.toUpperCase()))
        {
            cards[index].classList.remove("hide");
        }
        else
        {
            cards[index].classList.add("hide");
        }
    });
});

window.onload = () =>
{
    filterProduct("all");
};
