

function addProduct(produkt){
    $(".main").append("<div class='card'><div class='cardimage'><img src='./" + produkt.prodBild + "'></div><div class='cardinfo'>" + produkt.prodDesc +"</div><div class='cardpris'>" + produkt.prodPrice + " kr</div><button class'buy'>Lägg i kundkorg</button></div>")
}

/*
        for(var i = 0; i < underkategorier.length; i++) {
            if (underkategorier[i].huvudkategori == 2){
                $(".undermenykreatin").append("<button class='undermenybutton'>"+ underkategorier[i].stadname +" </undermenybutton>")  
        }}
        for(var i = 0; i < underkategorier.length; i++) {
            if (underkategorier[i].huvudkategori == 3){
                $(".undermenypwo").append("<button class='undermenybutton'>"+ underkategorier[i].stadname +" </undermenybutton>")  
        }}
        for(var i = 0; i < underkategorier.length; i++) {
            if (underkategorier[i].huvudkategori == 4){
                $(".undermenygainer").append("<button class='undermenybutton'>"+ underkategorier[i].stadname +" </undermenybutton>")  
        }}
        */


//menyn slut//

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