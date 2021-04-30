function displayDishes() {
    const dishes = [
        "Hakkebøffer + Kartofler + Salat",
        "Æggekage",
        "Mørbrad m. pikantsovs + Bulgursalat",
        "Fiskefillet + Bønner + Rodfrugter",
        "Hønsekødssuppe + Hvisløgsbrød",
        "Kyllingenuggets + Sunde fritter + pastasalat",
        "Fiskefrikadeller + Hasselbagte gulerødder + Salat",
        "Sund lasange",
        "Hasselbat kylling + Bønner + Bulgursalat",
        "Kålpandekagero",
        "Tærte",
        "Kødsovs + Kål",
        "Kyllingefrikadeller + Bønner + Brokoli",
        "Kyllingefrikadeller + Rodfrugter + Bulgursalat",
        "Mexikanske pandekager",
        "Pitabrød",
        "Kartoffelporresuppe",
        "Hakkebøffer + Rodfrugter + Sovs",
        "Kyllingeburger + Bønner + Sunder fritter",
        "Løgsuppe + Hvidløgsbrød",
        "Kålfad",
        "Biksemad",
        "Kyllinge kødsovs + Fuldkornspasta",
        "Sund tacogryde",
        "Kyllingefilleter m. pikant + Rodfrugter + Bulgursalat",
        "Chicken noodle soup"
    ]

    monday   = document.querySelector(".monday");
    tuesday  = document.querySelector(".tuesday");
    wednesday   = document.querySelector(".wednesday");
    thursday  = document.querySelector(".thursday");

    monday2  = document.querySelector(".monday2");
    tuesday2 = document.querySelector(".tuesday2");
    wednesday2  = document.querySelector(".wednesday2");
    thursday2 = document.querySelector(".thursday2");

    monday3  = document.querySelector(".monday3");
    tuesday3 = document.querySelector(".tuesday3");
    wednesday3  = document.querySelector(".wednesday3");
    thursday3 = document.querySelector(".thursday3");

    monday4  = document.querySelector(".monday4");
    tuesday4 = document.querySelector(".tuesday4");
    wednesday4  = document.querySelector(".wednesday4");
    thursday4 = document.querySelector(".thursday4");

    // one week
    var weeks = []
    var i = 0;

    do {
        var random = Math.floor(Math.random() * dishes.length)

        if (!weeks.includes(dishes[random])) {
            weeks.push(dishes[random]);
        } else {
            continue
        }
        i++

    } while (i <= 8) {

            monday.innerHTML      = weeks[0].split("+").join("<br> +")
            tuesday.innerHTML     = weeks[0].split("+").join("<br> +")
            wednesday.innerHTML   = weeks[1].split("+").join("<br> +")
            thursday.innerHTML    = weeks[1].split("+").join("<br> +")

            monday2.innerHTML     = weeks[2].split("+").join("<br> +")
            tuesday2.innerHTML    = weeks[2].split("+").join("<br> +")
            wednesday2.innerHTML  = weeks[3].split("+").join("<br> +")
            thursday2.innerHTML   = weeks[3].split("+").join("<br> +")

            monday3.innerHTML     = weeks[4].split("+").join("<br> +")
            tuesday3.innerHTML    = weeks[4].split("+").join("<br> +")
            wednesday3.innerHTML  = weeks[5].split("+").join("<br> +")
            thursday3.innerHTML   = weeks[5].split("+").join("<br> +")

            monday4.innerHTML     = weeks[6].split("+").join("<br> +")
            tuesday4.innerHTML    = weeks[6].split("+").join("<br> +")
            wednesday4.innerHTML  = weeks[7].split("+").join("<br> +")
            thursday4.innerHTML   = weeks[7].split("+").join("<br> +")

            console.log(weeks[0].split("+").join("<br> +"))
    }


}

function generateDishes() {
    let btn = document.getElementById('generator')

    btn.addEventListener("click", displayDishes)

}


generateDishes()
displayDishes()