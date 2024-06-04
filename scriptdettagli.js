document.addEventListener("DOMContentLoaded", async () => {
   // console.log("pagina caricata")
    const params= new URLSearchParams(location.search)
    //console.log (params)
    let asin = params.get("asin")
   // console.log(asin)
   let price = params.get("price")
   //console.log(price)
   fetch ("https://striveschool-api.herokuapp.com/books/" + asin)
   .then((response) =>{
    //console.log(response)
    response.json().then((data)=> {
    //console.log(data.title)
    let container ="<div>"  

        container += "<div class='card m-2' style='width: 18rem; height: 35rem;'><img src='" +data.img + "'class='card-img-top img-fluid'/>"
        container += "<div class='card-body text-center'><h6 class='card-title'>"+data.title +"</h6><p class='card-text'>Prezzo: "+data.price +"€</p>"
        container +="</div>"

        document.getElementById("schedaLibro").innerHTML+=container
    })
    
    })
})