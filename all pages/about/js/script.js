$(".back_new_color").click(function(){
    if($("#light").attr("class") == "fa-solid fa-sun"){
        $("#light").attr("class", "fa-solid fa-moon");
            $("body").css("background", "#fff");
            $("body").css("color", "#111");
            $(".offcanvas").css("background", "#fff");
            $(".navbar-toggler").css("color", "#111");
    }else{
        $("#light").attr("class", "fa-solid fa-sun");
            $("body").css("background", "#232323");
            $("body").css("color", "#fff");
            $(".offcanvas").css("background", "#232323");
            $(".navbar-toggler").css("color", "#fff");
    };
});