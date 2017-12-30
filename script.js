var huvudprodukter
var underkategorier

$(document).ready(function(){
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

    

    $(".footer1").append("<div class='footer1left'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1middle'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1right'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer2").append("<div><img src='bilder/footer-logos-se.png' class='betalning'></div>")
    
});

function loadData(){ 

    $.getJSON('json/huvudkategorier.json', function(data){
        huvudkategorier = data;
        addMainList(huvudkategorier);
    });
    
    $.getJSON('json/underkategorier.json', function(data){
        underkategorier = data;
    });
    
    $.getJSON('json/produkter.json', function(data){
        produkter = data;
        
    });
}