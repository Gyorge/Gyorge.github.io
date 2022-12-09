let listOpen = false
let list2Open = false


$(document).ready(function (){

    $("#showbtn").click(function (){
        $(".sidenav")[0].style.width = "70%"
        $(".dimmer")[0].style.display = "block"
    })

    $("#closebtn").click(function (){
        $(".dropdown-content")[0].style.height = "0"
        $(".dropdown-content2")[0].style.height = "0"
        $(".sidenav")[0].style.width = "0px"
        $(".dimmer")[0].style.display = "none"
    })

    $(".dropbtn").click(function (){
        if (!listOpen){
            $(".dropdown-content")[0].style.height = "55%"
            listOpen = true
        }else{
            $(".dropdown-content")[0].style.height = "0"
            $(".dropdown-content2")[0].style.height = "0"
            listOpen = false
            list2Open = false
        }
    })

    $(".dropbtn2").click(function (){
        if (!list2Open){
            $(".dropdown-content")[0].style.height = "58%"
            $(".dropdown-content2")[0].style.height = "100%"
            list2Open = true
        }else{
            $(".dropdown-content")[0].style.height = "55%"
            $(".dropdown-content2")[0].style.height = "0%"
            list2Open = false
        }
    })

    $("#options_wonders_base").click(function (){
        let element = $("#wonders_base_container")
        console.log(element)
        if (element.style.height === "0"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })

    $("#options_wonders_armada").click(function (){
        let element = $("#wonders_armada_container")
        if (element.style.height === "0%"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })

    $("#options_wonders_cities").click(function (){
        let element = $("#wonders_cities_container")
        if (element.style.height === "0%"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })

    $("#options_wonders_leaders").click(function (){
        let element = $("#wonders_leaders_container")
        if (element.style.height === "0%"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })

    $("#options_duel_agora").click(function (){
        let element = $("#duel_agora_container")
        if (element.style.height === "0%"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })

    $("#options_duel_base").click(function (){
        let element = $("#duel_base_container")
        if (element.style.height === "0%"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })

    $("#options_duel_pantheon").click(function (){
        let element = $("#duel_pantheon_container")
        if (element.style.height === "0%"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })

    $("#options_everdell").click(function (){
        let element = $("#everdell_container")
        if (element.style.height === "0%"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })

    $("#options_terraformingmars").click(function (){
        let element = $("#terraformingmars_container")
        if (element.style.height === "0%"){
            element.style.height = "100%"
        }else{
            element.style.height = "0"
        }
    })


})