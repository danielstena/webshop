$(document).ready(function(){
    $(".footer1").append("<div class='footer1left'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1middle'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1right'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer2").append("<div><img src='bilder/footer-logos-se.png' class='betalning'></div>")
    var json = fetch("huvudkategorier.json")

    .then(function(response) {
            return response.json();
    })

    .then(function(lista){
            
            var huvudprodukter = lista
            console.log(huvudprodukter)

            $(".meny").append("<a href='index.html'><button class='menybutton'>Start</button></a>")
            $(".meny").append("<button class='menybutton'>Info</button>")
            

            for(var i = 0; i < huvudprodukter.length; i++) {
                $(".meny").append("<a href='" + huvudprodukter[i].link +"'><button class='menybutton menybutton"+[i]+"'>"+ huvudprodukter[i].kategoriname +" </button>")
            }

            $(".meny").append("<button class='menybutton'>Kontakt</button>")
            $(".meny").append("<button class='menybutton'>Kundvagn</button>")
    });



    $.getJSON('underkategorier.json', function(data){
        underkategorier = data;

        
        for(var i = 0; i < underkategorier.length; i++) {
            if (underkategorier[i].huvudkategori == 1){
                $(".undermenyprotein").append("<button class='undermenybutton' onclick='unbut" + [i]+"'>"+ underkategorier[i].kategoriNamn +" </button>")  
        }}
        for(var i = 0; i < underkategorier.length; i++) {
            if (underkategorier[i].huvudkategori == 2){
                $(".undermenykreatin").append("<button class='undermenybutton' onclick='unbut" + [i]+"'>"+ underkategorier[i].kategoriNamn +" </button>")  
        }}
        for(var i = 0; i < underkategorier.length; i++) {
            if (underkategorier[i].huvudkategori == 3){
                $(".undermenypwo").append("<button class='undermenybutton'>"+ underkategorier[i].kategoriNamn +" </button>")  
        }}
        for(var i = 0; i < underkategorier.length; i++) {
            if (underkategorier[i].huvudkategori == 4){
                $(".undermenygainer").append("<button class='undermenybutton'>"+ underkategorier[i].kategoriNamn +" </button>")  
        }}

   
        });
        // VARFÖR FUNKAR DET INTE?????!?!?!? 
        $(".unbut0").click(function(){
            console.log("hej")
        
    });

    $.getJSON('produkter.json', function(data){
        produkter = data;

        
        for(var i = 0; i < produkter.length; i++) {
            if (produkter[i].huvudKat == 1 & produkter[i].underKat == 1 ){
                $(".main").append("<div class='card'><div class='cardimage'><img src='" + produkter[i].prodBild + "'></div><div class='cardinfo'>" + produkter[i].prodDesc +"</div><div class='cardpris'>" + produkter[i].prodPrice + " kr</div></div>")
                
               
        }}
 

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
    });
});

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
                
                $(".mastercard").append("<div class='card'><div class='cardimage'><img src=' " + produkter[i].prodBild +  " ' class='prodbild'></div><div class='cardinfo'>Info om produkten</div><div class='cardpris'>149 kr</div><div class='buybutton'><button class='buy'>Lägg i kundkorgen</button></div></div>");
                
            }
    });
*/