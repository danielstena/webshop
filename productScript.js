

/*function addProduct(produkt){
    $(".main").append("<div class='card'><div class='cardimage'><img src=' " + produkt.prodBild +  " ' class='prodbild'></div><div class='cardinfo'>" + produkt.prodDesc +"</div><div class='cardpris'>" + produkt.prodPrice + " kr</div><button class'buy' onclick='addToBasket'>Lägg i kundkorg</button></div>")
}*/


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
    button.onclick = function() {

    //Här ska det pushas till vagnen
    }

    $(".main").append(card) 
    $(".card").append(img)
    $(".card").append(description)
    $(".card").append(price)
    $(".card").append(button)
    
}



//Produkter start//

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