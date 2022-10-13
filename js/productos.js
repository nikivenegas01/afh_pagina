//Correr esta funcion cuando el documento este listo
$(document).ready(function(){
    $("#accSecciones").accordion({
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus"},
        heightStyle: "content", collapsible: true
    })

    $("#accSecciones > h3").click(function(){
      document.getElementById("nuestrosproductosh2").scrollIntoView({ behavior: 'smooth'});
    })
})

