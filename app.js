<!-- Button 'Gotowe' który dodaje imię użytkownika zadanie 2.3/add_name @Robert początek kodu -->

document.addEventListener("DOMContentLoaded", function () {
    const addNameButton = document.querySelector('.add_name_btn');
    const userNameDiv = document.querySelector(".user_name_div");
    const userNameInput = document.querySelector(".user_name_input");
    const addNameSection = document.querySelector(".app_form");
    const pulpit = document.querySelector("#pulpit");
    const displayRecipesBox = document.querySelector(".display_recipes");
    console.log(displayRecipesBox);
    const listOfRecipesBtn = document.querySelector(".btn_przepisy");
    console.log(listOfRecipesBtn);

    pulpit.style.display = 'none';
    displayRecipesBox.style.display = "none";

    userNameInput.addEventListener('change', function() {
        const userName = userNameInput.value;
        localStorage.setItem('savedName', userName);
        console.log(localStorage.savedName);
    });

    if (localStorage.savedName != null) {
        addNameButton.addEventListener('click', function () {
            addNameSection.style.display = "none"; //classList.add('d-none') nie działa tutaj i nie wiem dlaczego;
            userNameDiv.innerHTML = localStorage.savedName;
            console.log(userNameDiv.innerHTML);
            pulpit.style.display = "block";
        })
    } else {
        addNameSection.style.display = "block";
        pulpit.style.display = "none";
    }

    if (window.performance.navigation.type ===  window.performance.navigation.TYPE_RELOAD) {
        addNameSection.style.display = "none"; //classList.add('d-none') nie działa tutaj i nie wiem dlaczego;
        userNameDiv.innerHTML = localStorage.savedName;
        pulpit.style.display = "block";
    }

    <!-- Button 'Gotowe' który dodaje imię użytkownika zadanie 2.3/add_name @Robert koniec kodu -->

    <!-- Robert: button Pulpit: przekierowuje na pulpit dodawania przepisu i planu na tydzień oraz button Przepisy: przekierowuje i wyświetla listę z przepisami  start -->
    listOfRecipesBtn.addEventListener("click", function () {
        displayRecipesBox.style.display = "block";
        pulpit.style.display = 'none';
    });

    let pulpitBtn = document.getElementById("pulpitBtn");  <!-- część skopiowana i poprawiona od Beaty: wyświetla i ukrywa odpowiednie boxy -->
    let dashboard = document.getElementById("pulpit");

    pulpitBtn.onclick =  () => {
        dashboard.style.display = "block";
        displayRecipesBox.style.display = "none";
    }
    <!-- Robert: button Pulpit: przekierowuje na pulpit dodawania przepisu i planu na tydzień oraz button Przepisy: przekierowuje i wyświetla listę z przepisami  end -->


    <!-- Robert: button Plany: przekierowuje i wyświetla dodawanie nowego planu (zad.6.1 Beata), ukrywa Pulpit i Przepisy - start-->
    const addNewPlanBtn = document.querySelector(".btn_plany");

    addNewPlanBtn.addEventListener("click", function () {
        console.log(addNewPlanBtn, "czekam na podpięcie sekcji Dodaj Nowy Plan :)");
        displayRecipesBox.style.display = "none";
        pulpit.style.display = 'none';
    });
    <!-- Robert: button Plany: przekierowuje i wyświetla dodawanie nowego planu (zad.6.1 Beata), ukrywa Pulpit i Przepisy - end -->

    <!-- Robert: zapisywanie obiektu do localStorage start -->

    <!-- przepisy zapisane do localStorage -->
    const recipe_1 = { "ID": 1, "NAZWA": "Burger wołowy zapiekany z serem żółtym", "OPIS": "Babcia Hania mawiała, że najlepsze burgery trzeba robić na smalcu. Do zmielonego mięsa wołowego dodaj dwa jajka oraz sól i pieprz do smaku. Wszystko wymieszaj i uformuj burgery. Najlepiej użyć formeki jak do ciastek. Rozgrzzej patelnię i podsmaż burgery z jednej strony, po 3-4 minutach obróć i zmniejsz płomień, na wierch połóż ser żółty. Smaż dalej 3 do 5 minut."}
    localStorage.setItem('savedRecipe_1', JSON.stringify(recipe_1));

    const recipe_2 = {"ID": 2, "NAZWA": "Jajecznica na boczku", "OPIS": "Klasyk wśród ulubionych dań polskich mężczyzn. Na rozgrzanej patelni rozpuść trochę smalcu. Wcześniej, w miseczce przygotuj 3-4 jajka, wymieszaj je na jednolitą masę, możesz dodać soli kłodawskiej. Plastry boczku podsmaż lekko z obu stron na patelni przed dodaniem jajek. Dodaj jajka i mieszaj by nie przypalić."}
    localStorage.setItem('savedRecipe_2', JSON.stringify(recipe_2));

    const recipe_3 = { "ID": 3, "NAZWA": "Omlet każdego sportowca", "OPIS": "Przepis trenera kadry narodowej i przygotowania mentalnego, trenera Roberta. W miseczce rozbij 4-10 jajek (ilość jajek dobierana jest indywidualnie i jest zależna od twojego dziennego zapotrzebowania na kcal; o tym szerzej możesz poczytać w książce pt. Genetycy 2.0 o odżywianiu w sporcie). Jajka wymieszaj aż do momentu uzyskania jednolitej konsystencji. Na patelni rozgrzej smalec lub masło (irlandzckie, klarowane lub zwykłe śmietankowe). Wlej jajka a patelnię przykryj pokrywką. Smaż 2-4 min. Przełóż omleta na duży płaski talerz. Dodaj skyr lub jogurt typu greckiego. Do smaku możesz dodać gorzką czekoladę min 64% i cynamon."}
    localStorage.setItem('savedRecipe_3', JSON.stringify(recipe_3));

    const recipe_4 = { "ID": 4, "NAZWA": "Golonka pieczona", "OPIS": "Prostszego przepisu chyba nie ma na świecie. Wybrany kawałek golonki upiecz na grilu."}
    localStorage.setItem('savedRecipe_4', JSON.stringify(recipe_4));

    const recipe_5 = { "ID": 5, "NAZWA": "Kotlety mielone wieprzowe", "OPIS": "Przepis na 2 osoby. Wieprzowe mięso mielone 400g wymieszaj z dwoma jajkami z wolnego wybiegu, do smaku możesz dodać drobno pokrojoną cebulę. Dodaj sól i pieprz (szczyptę) do smaku. Dokładnie wymieszaj i uformuj w rękach kotlety. Na patelni rozgrzej smalec. Smaż na wolny ogniu 5-7 min, potem odwróć kotlety i smaż kolejne 5-7 min."}
    localStorage.setItem('savedRecipe_5', JSON.stringify(recipe_5));

    const recipe_6 = {"ID": 6, "NAZWA": "Borówka amerykańska z bitą śmietaną", "OPIS": "Ze śmietany 36% kupionej w sklepie ubij bitą śmietanę. 200g borówki amerykańskiej polej bitą śmietaną, możesz dodać rodzynki, orzych laskowe lub cynamon do smaku."}
    localStorage.setItem('savedRecipe_6', JSON.stringify(recipe_6));

    const recipe_7 = {"ID": 7, "NAZWA": "Bita śmietana z czekoladą i owocami", "OPIS": "Śmietanę 36% kupioną w sklepie za rogiem ubij na bitą śmietanę (możesz też zrobić własną śmietanę z mleka prosto od krowy). Owoce, czekoladę i bakalie włóż do pucharków w kolejności: owoce, bita śmietana, gorąca czekolada, orzechy laskowe i migdały. Gotowe do podania od razu."}
    localStorage.setItem('savedRecipe_7', JSON.stringify(recipe_7));
    <!-- przepisy zapisane do localStorage end -->

    <!-- odczyt przepisów z localStorage -->
    const readRecipe_1 = localStorage.getItem("savedRecipe_1");
    const readRecipe_2 = localStorage.getItem("savedRecipe_2");
    const readRecipe_3 = localStorage.getItem("savedRecipe_3");
    const readRecipe_4 = localStorage.getItem("savedRecipe_4");
    const readRecipe_5 = localStorage.getItem("savedRecipe_5");
    const readRecipe_6 = localStorage.getItem("savedRecipe_6");
    const readRecipe_7 = localStorage.getItem("savedRecipe_7");

    console.log(JSON.parse(readRecipe_7).ID);
    console.log(JSON.parse(readRecipe_7).NAZWA);
    console.log(JSON.parse(readRecipe_7).OPIS);
    <!-- odczyt przepisów z localStorage end-->

    <!-- podstawienie przepisu z localStorage do komórki  item (td) tabeli -->
    const item = document.querySelector("body > div > section > section.display_recipes > div > table > tbody > tr:nth-child(1) > td:nth-child(2)");
    console.log(item.innerHTML);

    item.innerHTML = JSON.parse(readRecipe_1).NAZWA; //tu sprawdzam czy NAZWA obiektu zapisanego w localStorage nadpisze tekst w komórce tabeli i nadpsuje
    console.log(item.innerHTML);
    <!-- podstawienie przepisu z localStorage do komórki  item (td) tabeli end -->

    <!-- Robert: zapisywanie obiektu do localStorage end -->

});

<!-- Modal Beaty on i of -->

let modal1 = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let button = document.getElementsByClassName("modalBtn");
let modal2 =document.getElementById("myModal2");
let btn2 = document.getElementById("myBtn2");
let span2 = document.getElementsByClassName("modalBtn2");

btn.onclick =  () => modal1.style.display = "block";

button.onclick = () => modal1.style.display = "none";

btn2.onclick = () => modal2.style.display = "block";

span2.onclick = () => span2.style.display = "none";

window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
};

<!-- on of pulpit Beaty -->

// let pulpitBtn = document.getElementById("pulpitBtn");
// let dashboard = document.getElementById("pulpit");
//
// pulpitBtn.onclick =  () => {
//     dashboard.style.display = "block";
// }

<!-- Modal Beaty logika -->

let addButtonInstrunction = document.querySelector("#myModal > div > div.down___modal_wrapper > div.first___modal___column > div.containerFlex > img");
let addButtonIngredience = document.querySelector("#myModal > div > div.down___modal_wrapper > div.second___modal___column > div.containerFlex > img");
let instructionInput = document.querySelector("#first_column__input_modal");
let ingredientsInput = document.querySelector("#second_column__input_modal");
let deleteBtnInstr = document.querySelector("#list_of_instruction > li:nth-child(1) > img.delete_img");
let editBtnInstr = document.querySelector("#list_of_instruction > li:nth-child(1) > img.delete_img");
let closeModalButton = document.getElementById("modalBtn");
let recipiesModal = document.getElementById("myModal");

addAnotherLiInstruction = function() {
    let ul = document.getElementById("list_of_instruction");
    let li = document.createElement("li");
    li.innerHTML = instructionInput.value;
    ul.appendChild(li);
}

addButtonInstrunction.addEventListener("click", addAnotherLiInstruction);


addAnotherLiIngredients = function() {
    let ul = document.getElementById("list_of_ingredients");
    let li = document.createElement("li");
    li.innerHTML = instructionInput.value;
    ul.appendChild(li);
}

addButtonIngredience.addEventListener("click", addAnotherLiIngredients);
