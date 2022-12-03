let listOpen = false
let list2Open = false


$(document).ready(function (){

    $("#showbtn").click(function (){
        $(".sidenav")[0].style.width = "400px"
    })

    $("#closebtn").click(function (){
        $(".dropdown-content")[0].style.height = "0"
        $(".dropdown-content2")[0].style.height = "0"
        $(".sidenav")[0].style.width = "0px"
    })

    $(".dropbtn").click(function (){
        if (!listOpen){
            $(".dropdown-content")[0].style.height = "23%"
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
            $(".dropdown-content")[0].style.height = "35%"
            $(".dropdown-content2")[0].style.height = "31%"
            list2Open = true
        }else{
            $(".dropdown-content")[0].style.height = "23%"
            $(".dropdown-content2")[0].style.height = "0%"
            list2Open = false
        }
    })
})