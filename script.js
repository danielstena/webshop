var huvudprodukter
var underkategorier

$(document).ready(function(){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   loadData();

   var memberInformation = [];

   if(localStorage.memberInformation == null){
        var json_str = JSON.stringify(memberInformation);
        sessionStorage.memberInformation = json_str;
        console.log("Nu är local storage tom")
    }

   submitMember = function(val){
    console.log(val);
   }

    // Login
    function start(){
        $(".memberlogin").hide();
        $(".member").hide();
        $(".kontakt").hide();
        $(".cart").hide();
        $(".info").hide();
        $(".becomeMember").hide();
        console.log("start")
    }
    function inloggad(){
        $(".main").hide();
        $(".member").show();
        $(".memberlogin").show();
        $(".headerlogin").hide();
        console.log("inloggad")
    }
    

<<<<<<< HEAD
    var ourUser = "test";
    var ourPassword = "test";

    if (sessionStorage.ourUser != null){
        inloggad();
    }   
        else {
            start();
            // Klicka på logga in
            $(".login").submit(function(e){
                e.preventDefault();

                if (ourUser == $(".usrnm").val() && ourPassword == $(".pswrd").val()) {
                    // Dölj inlogg Visa welcome + user
                    sessionStorage.ourUser = $(".userEmail").val();
                    inloggad();
                }   else {
                        fellosen();
                    }
            });
        }
    $(".logout").click(function(){
        sessionStorage.clear();
        location.reload();
    });


    });


=======
=======
>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop
=======
>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop
=======
>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop
>>>>>>> 65b8d7c2cb545bbffe698d744b7f9c6772c8433b
    $(".footer1").append("<div class='footer1left'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1middle'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1right'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer2").append("<div><img src='bilder/footer-logos-se.png' class='betalning'></div>")
<<<<<<< HEAD
    
<<<<<<< HEAD
//Mina fetcher
    function loadData(){ 
=======
});
=======
    var json = fetch("huvudkategorier.json")

    .then(function(response) {
            return response.json();
    })

    .then(function(lista){
            
            var huvudprodukter = lista
            console.log(huvudprodukter)

            $(".meny").append("<a href='index.html'><button class='menybutton'>Start</button></a>")
            $(".meny").append("<button class='menybutton'>Info</button>")
            
>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop

function loadData(){ 
>>>>>>> 65b8d7c2cb545bbffe698d744b7f9c6772c8433b

    $.getJSON('json/huvudkategorier.json', function(data){
        huvudkategorier = data;
        addMainList(huvudkategorier);
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    
    $.getJSON('json/underkategorier.json', function(data){
=======

=======


>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop

=======


>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop

    $.getJSON('underkategorier.json', function(data){
>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop
        underkategorier = data;
    });
    
    $.getJSON('json/produkter.json', function(data){
        produkter = data;
        
<<<<<<< HEAD
    });    
=======
<<<<<<< HEAD
=======
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
>>>>>>> parent of a4d95ee... Lagt till knapp på kort
    });
>>>>>>> 65b8d7c2cb545bbffe698d744b7f9c6772c8433b
}