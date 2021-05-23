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
    "Kålpandekager",
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


/*MODAL*/
// variables for buttons
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.CDATA_SECTION_NODE.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal() {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal() {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}



function displayDishes() {


    // random week dish generator
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


    // MODAL BODY
    // import html element
    // create html element div>p 
    // add classes for styling
    // display dishes
    const overlayDishes = document.querySelector('.modal-body')
    dishes.forEach(element => {
        const newEl = document.createElement('div')
        
        newEl.innerHTML = `<p>${element}</p>`
        newEl.classList.add('infoCard')
        newEl.classList.add('overlayDishes')

        overlayDishes.appendChild(newEl)

        newEl.addEventListener('click', () => {
            openModalButtons.innerHTML = newEl.innerHTML
        })
    });




}

function generateDishes() {
    let btn = document.getElementById('generator')

    btn.addEventListener("click", displayDishes)

}

function saturdayDishes() {
    let btn = document.getElementById('saturdayBtn')
    let input1 = document.getElementById('sat1');
    let input2 = document.getElementById('sat2');
    let input3 = document.getElementById('sat3');
    let input4 = document.getElementById('sat4');
    
    let sat1 = document.querySelector(".saturday1");    
    let sat2 = document.querySelector(".saturday2");    
    let sat3 = document.querySelector(".saturday3");    
    let sat4 = document.querySelector(".saturday4");    

    btn.addEventListener("click",() => {
        if (input1.value === "") {
            input1.style.border = "2px solid red"
        } else {
            sat1.innerHTML = input1.value.split("+").join("<br> +")
        }
        if (input2.value === "") {
            input2.style.border = "2px solid red"
        } else {
            sat2.innerHTML = input2.value.split("+").join("<br> +")
        }
        if (input3.value === "") {
            input3.style.border = "2px solid red"
        } else {
            sat3.innerHTML = input3.value.split("+").join("<br> +")
        }
        if (input4.value === "") {
            input4.style.border = "2px solid red"
        } else {
            sat4.innerHTML = input4.value.split("+").join("<br> +")
        } 

    })

}

function weekStart() {
    let btn = document.getElementById('showWeek');
    let input = document.getElementById('Weekinput');

    let u1 = document.getElementById("u1")
    let u2 = document.getElementById("u2")
    let u3 = document.getElementById("u3")
    let u4 = document.getElementById("u4")

    btn.addEventListener("click",() => {
        if (input.value === "") {
            input.style.border = "2px solid red";
        } else {
            console.log(parseInt(input.value, 10) + 1)
            u1.innerHTML = input.value;
            u2.innerHTML = parseInt(input.value, 10) +1
            u3.innerHTML = parseInt(input.value, 10) +2
            u4.innerHTML = parseInt(input.value, 10) +3

        }
    })

}



generateDishes()
displayDishes()
saturdayDishes()
weekStart()