
//Correr esta funcion cuando el documento este listo
$(document).ready(function(){
    //Crear accordion en el elemento #accSecciones
    $("#accSecciones").accordion({
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus"},
        heightStyle: "content"
    })

    /*$(".nuestrosproductos .prod-card > img").wrap(`<a class="imglink" data-lightbox="nuestrosproductos"></a>`)
    const $links = $(".nuestrosproductos .prod-card > a")
    console.log($links.children().first())
    $links.attr("href", $links.children().first().attr("src"))*/

    

    /*const cards = $(".nuestrosproductos .prod-card")
    cards.each((i, card)=> {
      console.log(card)
      
      const img = $(card).get(0).clone()
      $(card).get(0).remove()
      $(card).prepend($(`<a class="imglink" data-lightbox="nuestrosproductos"></a>`))
      $(card).get(0).prepend(img)
    })*/
    



    
})

