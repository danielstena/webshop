var huvudprodukter
var underkategorier

$(document).ready(function(){
   loadData();

    // Login
    function start(){
        $(".memberlogin").hide();
        $(".member").hide();
    }
    start();

    

    $(".footer1").append("<div class='footer1left'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1middle'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer1").append("<div class='footer1right'>Supernutrition INC <br> All rights reserved</div>")
    $(".footer2").append("<div><img src='bilder/footer-logos-se.png' class='betalning'></div>")
    
});

function loadData(){ 

    $.getJSON('huvudkategorier.json', function(data){
        huvudkategorier = data;
        addMainList(huvudkategorier);
    });
    
    $.getJSON('underkategorier.json', function(data){
        underkategorier = data;
    });
    
    $.getJSON('produkter.json', function(data){
        produkter = data;
        
    });
}