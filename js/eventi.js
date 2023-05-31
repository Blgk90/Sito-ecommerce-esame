let itemListPast = document.querySelector("#itemListPast");
let itemListFuture = document.querySelector("#itemListFuture");
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





// CARICAMENTO DEI PRODOTTI NELLA PAGINA PRODUCTS


fetch('http://localhost:3000/eventi')
.then(res => res.json())
.then(json =>{

    console.log(json[1]+"log attuale");
    json.forEach(element => {

        console.log(element);

        if(element.finish === "Passato")
        {
            itemListPast.innerHTML += 
        `<div class="col-md-4 col-sm-6 col-6 mb-4 d-flex">
            <div class= "w-100">
                <img class="card-img-top m-3 rounded" src="${element.image}" alt="Card image cap" style="width:100%;">
                
                <div class="d-flex flex-column justify-content-between" style="margin:1rem">
                      <h5 style="min-height:50px;">${element.title}</h5>
                      <h5 class="mb-3">${element.city}</h5>
                      <p class="card-text" style="min-height:150px;">${element.description}</p>
                      <h5 class="mb-3">data:<span style="color:red;"> ${element.date} <span></h5>
                      <div class="w-100"><b>${element.finish}</b></button>
                </div>
            </div>
        </div>` 
        }  

        if(element.finish === "Da svolgersi")
        {
            itemListFuture.innerHTML += 
        `<div class="col-md-4 col-sm-6 col-6 mb-4 d-flex">
            <div class= "w-100">
                <img class="card-img-top m-3 rounded" src="${element.image}" alt="Card image cap" style="width:100%;">
                
                <div class="d-flex flex-column justify-content-between" style="margin:1rem">
                      <h5 style="min-height:50px;">${element.title}</h5>
                      <h5 class="mb-3">${element.city}</h5>
                      <p class="card-text" style="min-height:150px;">${element.description}</p>
                      <h5 class="mb-3">data:<span style="color:red;"> ${element.date} <span></h5>
                      <div class="w-100"><b>${element.finish}</b></button>
                </div>
            </div>
        </div>` 
        }  



        //  itemList.innerHTML += `<div class="col-md-4 mb-4 d-flex">
        //                             <div class="card">
        //                                 <div style="height:200px" class="text-center mb-3">
        //                                    <img class="card-img-top m-3" src="${element.image}" alt="Card image cap" style="width:70%; max-height:100%;">
        //                                 </div>
        //                                 <div class="card-body d-flex flex-column justify-content-between">
        //                                     <h4 class="card-title">${element.title}</h4>
        //                                     <p class="card-text">${element.description}</p>
        //                                     <h5 class="card-text">prezzo: ${element.price} $</h5>
        //                                     <button class="btn btn-primary" id="${element.id}">Aggiungi al carrello</button>
        //                                 </div>
        //                             </div>
        //                         </div>` 
        //                         });

        })
})

// FINE CARICAMENTO DEI PRODOTTI NELLA PAGINA PRODUCTS



