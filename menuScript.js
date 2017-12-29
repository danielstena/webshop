//Huvudmeny början
function addMainList(huvudkategorier) {
            

    $(".meny").append("<a href='index.html'><button class='menybutton'>Start</button></a>")
    $(".meny").append("<button class='menybutton'>Info</button>")
    
    for(var i = 0; i < huvudkategorier.length; i++) {
        addMenuItem(huvudkategorier[i])
    }

    $(".meny").append("<button class='menybutton'>Kontakt</button>")
    $(".meny").append("<button class='menybutton'>Kundvagn</button>")
}

function addMenuItem(huvudkategori) {
    var button = document.createElement('button');
    button.innerText = huvudkategori.kategoriname
    button.className = "menybutton"
    button.onclick = function() {
        $(".undermeny").empty();
        for(var i = 0; i < underkategorier.length; i++) {
            if (underkategorier[i].huvudkategori == huvudkategori.id){
                addSubmenuItem(underkategorier[i])
            }
        }

    }
    $(".meny").append(button)
}

function addSubmenuItem(underkategori){
    var button = document.createElement('button')
    button.innerText = underkategori.kategoriNamn
    button.className = "undermenybutton"
    button.onclick = function() {
        console.log("HEEEEJ!!!")

        $(".main").empty();
        for(var i = 0; i < produkter.length; i++) {
            if (produkter[i].underKat == underkategori.id && produkter[i].huvudKat == underkategori.huvudkategori) {
                addProduct(produkter[i])
            }
        }
    }

    $(".undermeny").append(button)
}