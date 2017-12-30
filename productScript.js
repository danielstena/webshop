var shoppingCart = [ ];

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
    button.className = "buy"
    //$(button).click(console.log("klick"))
    button.addEventListener("click", function(){
        console.log("klick")
    });
    /*button.onclick = function() {
        
    //Här ska det pushas till kundvagnen
   
    }*/
   
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

/*

    var json = fetch("produkter.json")

    .then(function(response) {
            return response.json();
    })

    .then(function(lista){
            
            var produkter = lista
            console.log(produkter)

            for(var i = 1; i < 5; i++) {
                console.log (produkter[0].prodDesc)
                
                $(".main").append("<div class='card'><div class='cardimage'><img src=' " + produkter[i].prodBild +  " ' class='prodbild'></div><div class='cardinfo'>Info om produkten</div><div class='cardpris'>149 kr</div><div class='buybutton'><button class='buy'>Lägg i kundkorgen</button></div></div>");
                
            }
    });
*/