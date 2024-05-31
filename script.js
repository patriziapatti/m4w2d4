var tuttiLibri = []
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
        container += "<div><img class=img-fluid src='" +element.img + "'/>" +"</div>"
        container += "<div>"+element.title +"</div>"
        container += "<div>"+element.price +"€</div>"
        container += "</div>"


        let libri = document.querySelector(".contenitore")
        libri.innerHTML+= container

       });
    })
})

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
            container += "<div><img class=img-fluid src='" +element.img + "'/>" +"</div>"
            container += "<div>"+element.title +"</div>"
            container += "<div>"+element.price +"€</div>"
            container += "</div>"

            let libri = document.querySelector(".contenitore")
            libri.innerHTML+= container
        }
       });
    }
