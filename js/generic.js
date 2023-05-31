let itemList = document.querySelector("#itemList");
// NUMERO DI ITEMS CHE APPARE NEL BADGE
let itemsAmount = 0;
let badge = document.querySelector(".badge");

//QUESTA FETCH RECUPERA TUTTI GLI ELEMENTI CHE CI SONO NEL CARRELLO, LI CONTA E LI SCRIVE COME NUIMERO NEL BADGE
fetch("http://localhost:3000/carrello")
            .then (res => res.json())
            .then (json => {

            if (json.length != 0)
            {
                itemsAmount = json.length;
                badge.innerHTML = itemsAmount;
            }
            badge.innerHTML = itemsAmount;
        })
