let listOpen = false
let list2Open = false


$(document).ready(function (){

    $("#showbtn").click(function (){
        $(".sidenav")[0].style.width = "400px"
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
            $(".dropdown-content")[0].style.height = "19.5%"
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
            $(".dropdown-content")[0].style.height = "21.5%"
            $(".dropdown-content2")[0].style.height = "100%"
            list2Open = true
        }else{
            $(".dropdown-content")[0].style.height = "20%"
            $(".dropdown-content2")[0].style.height = "0%"
            list2Open = false
        }
    })

    $(".wholeContent").click(function (){
        let content = $("#content")
        let pdf = content.attr("name")
        content.attr("src", "../../rulebooks/" + pdf + ".pdf")
    })

    $(".reference").click(function (){
        let content = $("#content")
        let pdf = content.attr("name")
        content.attr("src", "../../rulebooks/" + pdf + "_short.pdf")
    })
})