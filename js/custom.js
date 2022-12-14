$("textarea#comment").addClass("form-control").css(
                        {
                            "border-color": "#E0E0E0", 
                            "border-width":"1px", 
                            "border-style":"solid"
                        });
$("input#author").addClass("form-control");
$("input#email").addClass("form-control");
$("input#url").addClass("form-control");

// $(".page-numbers").on("load", function() {
//     // alert('ok');
//     // $('.hdr-tab').hide();
//     // window.location.href.split('#')[0];
//     // window.location.hash = "blog";
//     // window.location.href.split("#").join('#blog')
//     // document.location.href = String( document.location.href ).replace( /#/, "#blog/" );
//     var url = window.location.href;
//     url.replace('#', '#blog');
//     location.href = url;
// });

$(".page-numbers").window.location.hash = "blog";