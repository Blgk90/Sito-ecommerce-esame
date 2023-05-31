let badge = document.querySelector(".badge");
let MainProd = document.querySelector(".MainProd");
let SideRecap = document.querySelector(".SideRecap");

let itemsNumNum = document.querySelector(".itemsNumNum");
let itemsTotPrice = document.querySelector(".itemsTotPrice");
let checkoutBtn = document.querySelector("#checkoutBtn");
let deleteAll = document.querySelector("#deleteAll");
let checkoutForm = document.querySelector("#checkoutForm");

let total = 0;
let easterCounter = 0;



function main ()
// FUNZIONE CHE FA UNA FETCH AL CARRELLO IN JSON SERVER E, SE NON è VUOTO,
//  RECUPERA GLI ELEMENTI E LI METTE NELL'ARRAY DI APPOGGIO LISTITEMTOSAVE
{
    console.log("sono in main");
    fetch("http://localhost:3000/carrello")
            .then (res => res.json())
            .then (json => {

            if (json.length == 0)
            {
                    MainProd.innerHTML = "<h1 class='my-3'>Il tuo carrello è vuoto</h1>";
                    total= 0;
                    badge.innerHTML = 0;
                    itemsNumNum.innerHTML ="<h4> 0 </h4>";
                    itemsTotPrice.innerHTML = "<h4> $ 0 </h4>";

                    if(!deleteAll.classList.contains("d-none"))
                    {
                        deleteAll.classList.add("d-none")
                    }


                    if(!checkoutBtn.classList.contains("d-none"))
                    {
                        checkoutBtn.classList.add("d-none")
                    }

                    if(!checkoutForm.classList.contains("d-none"))
                    {
                        checkoutForm.classList.add("d-none")
                    }
                    
            }
            else
            {
                total = 0;
                MainProd.innerHTML = "";
                deleteAll.classList.remove("d-none");
                checkoutBtn.classList.remove("d-none");

                json.forEach(element => {

                    MainProd.innerHTML += `<div class="row d-flex justify-content-between align-items-center border py-3 mb-3 rounded">
                    <div class="col-md-4"><img src="${element.img}" alt="" style="width:150px;height:150px"></div>
                    <div class="col-md-4"><h3>${element.title}</h3></div>
                    <div class="col-md-2 d-flex align-items-center justify-content-start"><h3 class="text-right">€ ${element.price}</h3></div>
                    <div class="col-md-2"><button class="btn btn-danger" onclick="cancella(${element.id})">Elimina</button></div>
                    </div>`

                        badge.innerHTML = json.length;
                        easterCounter = json.length;
                        itemsNumNum.innerHTML ="<h4>"+ json.length +"</h4>";
                        total = total + element.price;
                        itemsTotPrice.innerHTML = "<h4>$"+ total.toFixed(2) +"</h4>";
                });  
            }
            })
}

main ()


function cancella (indice)
{
   
    fetch("http://localhost:3000/carrello/"+indice, {
                        method: "DELETE",
                        })
                        .then((response2) => response2.json())
                        .then((json2) => 
                        {
                            main ();                    
                        });
    
}


function cancellaTutto()
{
        let url = "http://localhost:3000/carrello";

        let confermaUtente = false;

        if( easterCounter == 10)
        {
            confermaUtente = confirm("...tutti quei prodotti andranno perduti nel tempo, come lacrime nella pioggia...È tempo di confermare?");
        }
        else
        {
            confermaUtente = confirm("Sei sicuro di voler eliminare tutti i prodotti dal carrello?");
        }

        if(confermaUtente)
        {
            let counter = 0;
            fetch(url)
                .then(data =>{return data.json()})
                .then(carrello =>{
                    
                    carrello.forEach( elemento => {
                
                        let urlProd = url+"/"+elemento.id;
                        fetch(urlProd,{
                            method: "DELETE",
                            headers: {"Content-type" : "application/json"}
                        })
                        .then(last => {
                            counter ++ ; 
                            if(counter == carrello.length)
                            {
                                main()
                            }
                        })
                    })
           
                })

        }
}


deleteAll.addEventListener("click",cancellaTutto);


function checkout()
{
   
   if(checkoutForm.classList.contains("d-none")) 
   {
    checkoutForm.classList.remove("d-none")
   }
}

checkoutBtn.addEventListener("click", checkout);


