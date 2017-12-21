$(document).ready(function(){
    
    var json = fetch("huvudkategorier.json")

    .then(function(response) {
            return response.json();
    })

    .then(function(lista){
            
            var huvudprodukter = lista
            console.log(huvudprodukter)

            $(".meny").append("<button class='menybutton'>Start</button>")
            $(".meny").append("<button class='menybutton'>Info</button>")
            

            for(var i = 0; i < huvudprodukter.length; i++) {
                $(".meny").append("<a href='" + huvudprodukter[i].link +"'><button class='menybutton'>"+ huvudprodukter[i].kategoriname +" </button>")
                
              
            }

            $(".meny").append("<button class='menybutton'>Kontakt</button>")
            $(".meny").append("<button class='menybutton'>Kundvagn</button>")
    });

//menyn slut//

//Produkter start//



    var json = fetch("produkter.json")

    .then(function(response) {
            return response.json();
    })

    .then(function(lista){
            
            var produkter = lista
            console.log(produkter)

            for(var i = 1; i < 5; i++) {
                console.log (produkter[0].prodDesc)
                
                $(".container").append("<div class='col-sm-3'><div class='card kort' style='height: 45rem;'><img class='card-img-top' src=" + posts[i].better_featured_image.source_url + " alt='Card image cap'><div class='card-body'><h4 class='card-title'>" + posts[i].title.rendered + "</h4><p class='card-text'>" + posts[i].date + " </p><p class='card-text'>" + posts[i].excerpt.rendered + "</p><a href='#' class='btn btn-primary'>Go somewhere</a></div></div>" );
                
            }
    });










});