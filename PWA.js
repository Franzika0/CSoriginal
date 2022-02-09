function init(){

    $.noConflict;
    jQuery(document).ready(($)=>{
        $('#t').click(()=>{
            $('#t').animate({
                width : "+=100px",
                height : "+=100px"
            },1000)
        });

 
    });

}

init();