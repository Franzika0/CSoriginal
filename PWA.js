function init(){

    $.noConflict;
    jQuery(document).ready(($)=>{
        
        $('#t').click(()=>{
            $('#t').animate({
                width : "+=100px",
                height : "+=100px"
            },1000)
        });

        function MakeMainScene(){
            $('#device').append("<div mid id='FightPlace'></div>");
            calculateFightPlace();
            $('#FightPlace').append("<div mid id='Road_Outer'></div>");
            $('#FightPlace').append("<div mid id='Road_Inner'></div>");
            $('#Road_Inner').append("<div smallcastle id='Left_Player_SmallCastle'></div>");
            $('#Road_Inner').append("<div smallcastle id='Right_Player_SmallCastle'></div>");
            $('#Road_Inner').append("<div smallcastle id='Left_Enemy_SmallCastle'></div>");
            $('#Road_Inner').append("<div smallcastle id='Right_Enemy_SmallCastle'></div>");
            $('#Road_Inner').append("<div maincastle id='Enemy_MainCastle'></div>");
            $('#Road_Inner').append("<div maincastle id='Player_MainCastle'></div>");
        }

        function calculateFightPlace(){
            let width = window.innerWidth;
            $('#FightPlace').css({width : `${width*0.3}px`,height: `${width*0.48}px`});
        }

        MakeMainScene();




        window.addEventListener('resize', function () {

            let width = window.innerWidth;

            window.innerWidth > 900 ? 
            $('#FightPlace').css({width : `${width*0.3}px`,height: `${width*0.48}px`}) : 
            $('#FightPlace').css({width : `${width*0.8}px`,height: `${width*1.28}px`});

        })

 
    });

}

init();