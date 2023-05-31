let itemList = document.querySelector("#itemList");
let photoList = document.querySelector("#photoList");
// NUMERO DI ITEMS CHE APPARE NEL BADGE
let itemsAmount = 0;
let badge = document.querySelector(".badge");
let easter = document.querySelector("#easter");
let easterDue = document.querySelector("#easter2");
let easterCounter = 0;
let easterCounterDue = 0;

//QUESTA FETCH RECUPERA TUTTI GLI json[i]I CHE CI SONO NEL CARRELLO, LI CONTA E LI SCRIVE COME NUIMERO NEL BADGE
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

// CARICAMENTO DEI PRODOTTI NELLA PAGINA INDEX


fetch('http://localhost:3000/prodotti')
.then(res => res.json())
.then(json =>{

    for(let i = 0 ; i<3 ; i++)

        {
            photoList.innerHTML += `<div class="col-md-4 col-sm-6 col-6 mb-4 d-flex">
                                        <div class= "w-100">
                                            <img class="img-fluid m-3" src="${json[i].image}" alt="Card image cap" style="width:100%;">
                                            
                                            <div class="d-flex flex-column justify-content-between" style="margin:1rem">
                                                <h5>${json[i].title}</h5>
                                                <h5>prezzo:<span style="color:red;"> ${json[i].price} €<span></h5>
                                                <a href="products.html"> <b>Vai alla pagina prodotti</b><a/>
                                            </div>
                                        </div>
                                     </div>`        
        }

})


fetch('http://localhost:3000/eventi')
.then(res => res.json())
.then(json =>{

    for(let i = 0 ; i<3 ; i++)

        {
            itemList.innerHTML += `<div class="col-md-4 col-sm-6 col-6 mb-5 d-flex">
                                        <div class= "w-100">
                                            <img class="img-fluid m-3" src="${json[i].image}" alt="Card image cap" style="width:100%;">
                                            
                                            <div class="d-flex flex-column justify-content-between" style="margin:1rem">
                                                <h5 class="mb-3">${json[i].title}</h5>
                                                <h5 class="mb-3">${json[i].city}</h5>
                                                <h5>data:<span style="color:red;"> ${json[i].date} <span></h5>
                                                <p class="my-3"> ${json[i].description}</p>
                                                <a href="eventi.html" > <b>Vai alla pagina eventi</b><a/>
                                            </div>
                                        </div>
                                     </div>`        
        }

})


easter.addEventListener("click",function()
{
    easterCounter ++;
    if(easterCounter >= 5)
    {
        easter.innerHTML = "DARIO";
    }
})

easterDue.addEventListener("click",function()
{
    easterCounterDue++;
    if(easterCounterDue >= 5)
    {
        easterDue.innerHTML = "Orange Sound";
    }
})