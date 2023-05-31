let badge = document.querySelector(".badge");

function cancellaTutto()
{
    let url = "http://localhost:3000/carrello";
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
                                badge.innerHTML = 0; 
                            }
                        })
                    })
           
                })
}


cancellaTutto()
