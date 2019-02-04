
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
});
$(document).ready(function () {
    $('.scrollspy').scrollSpy();
    $('.sidenav').sidenav();
});

(function ($) {
    $(document).ready(function () {
        $(function () {
            $(".navbar-placeholder").hide();
            $(window).scroll(function () {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > 500) {
                    $(".navbar-placeholder").show();
                    $(".navbar").addClass("navbar-fixed");
                    $(".navbar").addClass("navbarfix");
                    $("#brand-logo").fadeIn();
                    document.getElementById("brand-logo").innerHTML = "1848-as forradalom";
                } else {
                    $(".navbar-placeholder").hide();
                    $(".navbar").removeClass("navbar-fixed");
                    $(".navbar").removeClass("navbarfix");
                    $("#brand-logo").fadeOut();
                    document.getElementById("brand-logo").innerHTML = "";
                }
            });
        });

    });
}(jQuery));


function openPage(page)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById('shell').innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", `html/${page}.html`, false );
    xmlhttp.send();    
}

openPage("fooldal");