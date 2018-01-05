//Huvudmeny början
function addMainList(huvudkategorier) {
           //Startknapp 

    $(".meny").append("<a href='index.html'><button class='menybutton'>Start</button></a>")
    addMenuInfo();
    
    for(var i = 0; i < huvudkategorier.length; i++) {
        addMenuItem(huvudkategorier[i])
    }
    addMenuKontact();
    addMenuCart();
}

function addMenuInfo() {
    //Infoknapp
    var button = document.createElement('button');
    button.innerText = "Info"
    button.className = "menybutton"
    button.onclick = function() {
        $(".main").hide();
        $(".kontakt").show();
        console.log("info")

    }
    $(".meny").append(button)
}

function addMenuKontact() {
    //Kontaktknapp
    var button = document.createElement('button');
    button.innerText = "Kontakt"
    button.className = "menybutton"
    button.onclick = function() {
        $(".main").hide();
        $(".kontakt").show();
        console.log("hej")

    }
    $(".meny").append(button)
}

function addMenuCart(huvudkategori) {
    //kundvagnsknapp
    var button = document.createElement('button');
    button.innerText = "Kundvagn"
    button.className = "menybutton"
    button.onclick = function() {
        $(".main").hide();
        $(".cart").show();
        

    }
    $(".meny").append(button)
}

//Huvudprodukter
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
//Underprodukter
function addSubmenuItem(underkategori){
    var button = document.createElement('button')
    button.innerText = underkategori.kategoriNamn
    button.className = "undermenybutton"
    button.onclick = function() {
        console.log("Undermeny!")

        $(".main").empty();
        for(var i = 0; i < produkter.length; i++) {
            if (produkter[i].underKat == underkategori.id && produkter[i].huvudKat == underkategori.huvudkategori) {
                addProduct(produkter[i])
            }
        }
    }

    $(".undermeny").append(button)
}
