var tuttiLibri = []
var carrello = []
fetch ("https://striveschool-api.herokuapp.com/books")
.then((response) =>{
    //console.log(response)
    response.json().then((data)=> {
       //console.log(data)
       data.forEach(element => {
        //console.log(element)
        tuttiLibri= data
        let container = ""  

        container +="<div>"
        container += "<div class='card m-2' style='width: 18rem; height: 42rem;'><img src='" +element.img + "'class='card-img-top img-fluid'/>"
        container += "<div class='card-body text-center'><h6 class='card-title'>"+element.title +"</h6><p class='card-text'>Prezzo: "+element.price +"€</p>"
        container += "<button type='button' class='btn btn-secondary' onclick= 'aggiungi(\""+ element.title + "\")'>Aggiungi al carrello</button>"
        container += "</div></div>"


        let libri = document.querySelector(".contenitore")
        libri.innerHTML+= container

       });
       
    })
})

function aggiungi(libro){
    //console.log(libro)
    sezioneCarrello = document.getElementById("contenutoCarrello")
    let newDiv = document.createElement("li")
    newDiv.innerHTML = libro
    sezioneCarrello.appendChild(newDiv)
}


function filtraLibri(){
   // console.log("ciao")
        let libri = document.querySelector(".contenitore")
        libri.innerHTML= ""
   let valoreRicerca = document.getElementById("cerca").value
    //console.log(valoreRicerca)
        valoreRicerca = valoreRicerca.toUpperCase()

       tuttiLibri.forEach(element => {
        let titoloUpperCase = element.title.toUpperCase()
        //console.log(element)
        let loInclude = titoloUpperCase.includes(valoreRicerca)
        //console.log(loInclude)
        if(loInclude === true){
            let container = ""  

        container +="<div>"
        container += "<div class='card m-2' style='width: 18rem; height: 42rem;'><img src='" +element.img + "'class='card-img-top img-fluid'/>"
        container += "<div class='card-body text-center'><h6 class='card-title'>"+element.title +"</h6><p class='card-text'>Prezzo: "+element.price +"€</p>"
        container += "<button type='button' class='btn btn-secondary'onclick= 'aggiungi(\""+ element.title +"\")'>Aggiungi al carrello</button>"
        container += "</div></div>"

            let libri = document.querySelector(".contenitore")
            libri.innerHTML+= container
        }
       });
    }


   

   /* function filtraLibri(){
        // console.log("ciao")
             let libri = document.querySelector(".contenitore")
             libri.innerHTML= ""
        let valoreRicerca = document.getElementById("cerca").value
         //console.log(valoreRicerca)
             valoreRicerca = valoreRicerca.toUpperCase()
     
            tuttiLibri.forEach(element => {
             let titoloUpperCase = element.title.toUpperCase()
             //console.log(element)
             let loInclude = titoloUpperCase.includes(valoreRicerca)
             //console.log(loInclude)
             if(loInclude === true){
                 let container = ""  
     
                 container +="<div>"
                 container += "<div><img class=img-fluid src='" +element.img + "'/>" +"</div>"
                 container += "<div>"+element.title +"</div>"
                 container += "<div>"+element.price +"€</div>"
                 container += "</div>"
     
                 let libri = document.querySelector(".contenitore")
                 libri.innerHTML+= container
             }
            });
         }
         
         "<a href='#' class='btn btn-secondary'>Aggiungi al carrello</a>"
         */