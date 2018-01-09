var huvudprodukter
var underkategorier

$(document).ready(function(){
<<<<<<< HEAD
   loadData();

    // Login
    function start(){
        $(".memberlogin").hide();
        $(".member").hide();
        $(".kontakt").hide();
        $(".cart").hide();
        $(".info").hide();
    }
    start();

    

=======
>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop
    $(".footer1").append("<div class='footer1left'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1middle'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1right'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer2").append("<div><img src='bilder/footer-logos-se.png' class='betalning'></div>")
<<<<<<< HEAD
    
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

    $.getJSON('json/huvudkategorier.json', function(data){
        huvudkategorier = data;
        addMainList(huvudkategorier);
    });
<<<<<<< HEAD
    
    $.getJSON('json/underkategorier.json', function(data){
=======



    $.getJSON('underkategorier.json', function(data){
>>>>>>> parent of e71b7a8... Merge branch 'master' of https://github.com/danielstena/webshop
        underkategorier = data;
    });
    
    $.getJSON('json/produkter.json', function(data){
        produkter = data;
        
    });
}