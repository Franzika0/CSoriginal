function init(){

    $.noConflict;
    jQuery(document).ready(($)=>{

        
        $('#t').click(()=>{
            $('#t').animate({
                width : "+=100px",
                height : "+=100px"
            },1000)
        });

        function MakeMainScene(screen_width){
            $('#device').append("<div mid id='FightPlace'></div>");
            $('#FightPlace').css({width : `${screen_width*0.3}px`,height: `${screen_width*0.48}px`});
            $('#FightPlace').append("<div mid id='Road_Outer'></div>"
                                   +"<div mid id='Road_Inner'></div>");
            $('#Road_Inner').append("<div smallcastle id='Left_Player_SmallCastle'></div>"
                                   +"<div smallcastle id='Right_Player_SmallCastle'></div>"
                                   +"<div smallcastle id='Left_Enemy_SmallCastle'></div>"
                                   +"<div smallcastle id='Right_Enemy_SmallCastle'></div>"
                                   +"<div maincastle id='Enemy_MainCastle'></div>"
                                   +"<div maincastle id='Player_MainCastle'></div>"
                                   +"<div mid id='River'></div>"
                                   +"<div mid bridge id='Left_Bridge'></div>"
                                   +"<div mid bridge id='Right_Bridge'></div>");
        }


        MakeMainScene(window.innerWidth);


        class Scene_MainPoints{
            //player_Left_Castle_point = [$('#Left_Player_SmallCastle').position().left,$('#Left_Player_SmallCastle').position().top];
            player_Left_Castle_point = [0,0];
            player_Right_Castle_point = $('#Right_Player_SmallCastle').position().right;

            MakePoints(){
                /*$('#FightPlace').append("<div mid point style='left:"+(this.player_Left_Castle_point[0])+"px;top:"
                +(this.player_Left_Castle_point[1])+"px'></div>");*/
                $('#FightPlace').append("<div mid point></div>");
            }
        }

        const Scene_MainPoints_obj = new Scene_MainPoints();
        Scene_MainPoints_obj.MakePoints();

        //$('#Player_MainCastle').text(Scene_MainPoints_obj.player_Left_Castle_point);
        /*$('#Player_MainCastle').click(()=>{
            $('#Player_MainCastle').text(Scene_MainPoints_obj.player_Left_Castle_point);
        });*/




        window.addEventListener('resize', function () {

            let width = window.innerWidth;

            window.innerWidth > 900 ? 
            $('#FightPlace').css({width : `${width*0.3}px`,height: `${width*0.48}px`}) : 
            $('#FightPlace').css({width : `${width*0.8}px`,height: `${width*1.28}px`});

        })

 
    });

}

init();