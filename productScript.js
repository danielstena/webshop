

function addProduct(produkt){
    var card = document.createElement('div');
    card.className = "card"
    
    var img = document.createElement("img")
    img.src = produkt.prodBild
    img.className = "prodbild"

    var description = document.createElement("p")
    description.innerText = (produkt.prodDesc)
    description.className = "cardinfo"

    var price = document.createElement("h2")
    price.innerHTML = (produkt.prodPrice) +" kr"
    price.className = "cardpris"

    var button = document.createElement('button');
    button.innerText = "Add to basket"
    button.id = ("buy" +i);
    button.onclick = function() {
        console.log("klick")
    //Får inget felmeddelande men heller inget "klick" när jag klickar på starnutrition under protein
    }
   
    $(card).append(img)
    $(card).append(description)
    $(card).append(price)
    $(card).append(button)
    $(".main").append(card) 
}



console.log("funkardet??")
/*console.log(shoppingCart);
shoppingCart.push(28);
//Produkter start// */

