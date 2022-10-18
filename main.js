function init(){
    $.noConflict;
    jQuery(document).ready(($)=>{
        $('#btn').click(()=>{
            var a = $('#A').animate({left:"+=200px"},{duration: 1500, easing: "linear" }).promise();
            //var b = $('#A2').animate({left:"+=200px"},{duration: 1500, easing: "linear" }).animate({left:"+=350px"},{duration: 1500, easing: "linear" }).promise();
            var c = $('#D').animate({left:"-=200px"},{duration: 1500, easing: "linear" }).promise();
            //var d = $('#A2').animate({left:"+=350px"},1500).promise();
            $.when(a,c).then(()=>{
                $('#Dw').animate({opacity:"1"},500);
                $('#A1w').animate({opacity:"1"},1500);
                $('#A2').animate({opacity:"1"},2500);
                $('#A2w').animate({opacity:"1"},2500);
            })
        });
    });
}

init();

/*var b = $('#Register_Page label').animate({height:"0.1rem"},500).promise();
var c = $('#Register_Page section').animate({opacity:"0"},500).promise();

$.when(b,c).then(()=>{
    $('#Login_Page section').animate({opacity:"1"},500)
    $('#Register_Page').css({zIndex:"5"});
    $('#Login_Page').css({zIndex:"10"});
    $('#Login_Page label').animate({height:"12rem"})
})

$.when(a).then(()=>{
    $('#SignNow').text('Login');
    $('#SignNow').animate({
        opacity:"1"
    },500);
    $('#panel_right_content_style').animate({opacity:"1"},500);
});*/