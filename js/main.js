$(function(){



  var rootElement = document.getElementById( "impress" );
  
  rootElement.addEventListener( "impress:stepenter", function() {
    var currentStep = document.querySelector( ".present" );
  


    if(currentStep.id==='step-1')
    {

      colorBkgGrowStep1();

      colorBkgFadeStep2();
      colorBkgFadeStep4();
      
     // $('#song-1').get(0).play();
     // $('#song-2').get(0).pause();

    } else if(currentStep.id==='step-2')
    {
      
      colorBkgGrowStep2();

      colorBkgFadeStep1();
      colorBkgFadeStep3();

      


    }else if(currentStep.id==='step-3')
    {
      
      colorBkgGrowStep3();

      colorBkgFadeStep2();
      colorBkgFadeStep4();
 


    } else if(currentStep.id==='step-4')
    {

      colorBkgGrowStep4();
      
      // logic to fadeout
      $('#song-1').animate({volume: 0}, 1000);
      //$('#song-1').get(0).pause();

      // $('#song-2').get(0).play();
      $('#song-2').animate({volume: 1}, 2000);
      

    } else if(currentStep.id==='step-5')
    {

      // $('#song-2').get(0).play();



      // $("#trumpet").animate({opacity: '0'}, 600);

      colorBkgFadeStep6();


    } else if(currentStep.id==='step-6')
    {

      colorBkgGrowStep6();

    } else if (currentStep.id==='step-7') 
    {

      $('#song-2').animate({volume: 0}, 1000);

      // $('#song-3').get(0).play();
      $('#song-3').animate({volume: 1}, 2000);


    } else if(currentStep.id==='step-8') {

      colorBkgGrowStep8();

      // $('#song-3').get(0).play();

    } else if(currentStep.id==='step-9') {

      colorBkgFadeStep10();


    } else if(currentStep.id==='step-10'){

      // $('#bgvid').get(0).play();

      colorBkgGrowStep10();

      $("#d-2-name").animate({opacity: '0'}, 1200);

    } else if(currentStep.id==='step-11'){

      colorBkgGrowStep11();

    } else if(currentStep.id==='step-13'){

      colorBkgGrowStep13();
      $('#bgvid').get(0).pause();

    } else if(currentStep.id==='step-14'){

      $('#bgvid').get(0).play();

    } else if(currentStep.id==='step-15'){

      // $('#bgvid').get(0).play();
      colorBkgGrowStep15();

    }



    

    


    console.log( "Entered the Step Element: " + currentStep.id);

    console.log(typeof currentStep.id==='string');

    
  });


  var rootElement = document.getElementById( "impress" );
  rootElement.addEventListener( "impress:stepleave", function(event) {
  var currentStep = event.target;



  colorBkgGrowStep2();
  // colorBkgGrowStep3();
  colorBkgGrowStep4();

  colorBkgGrowStep6();

  colorBkgGrowStep8();





    

   

    






  console.log( "Left the Step Element '" + currentStep.id + "'" );

});


  function colorBkgGrowStep1(){

    $("#box-1").animate({width: "100%"}, 1200);
    $("#box-2").animate({width: "100%"}, 1200);
    $("#box-3").animate({width: "100%"}, 1200);

  };


  function colorBkgFadeStep1() {
    $("#box-1").animate({width: "0%"}, {opacity: '0'}, 1200);
    $("#box-2").animate({width: "0%"}, 1200);
    $("#box-3").animate({width: "0%"}, {opacity: '0'}, 1200);
  };


  function colorBkgGrowStep2(){

    $("#box-4").animate({width: "100%"}, 1800);
    $("#q-1").animate({opacity: '1'}, 2000);
    $("#a-1").animate({opacity: '1'}, 2600);

  };


  function colorBkgFadeStep2() {
    $("#box-4").animate({width: "0%"}, {opacity: '0'}, 600);
    $("#q-1").animate({opacity: '0'});
    $("#a-1").animate({opacity: '0'});
  };


  function colorBkgGrowStep3(){

    $("#p-0").animate({height: "50px"}, 1200);
    $("#p-1").animate({height: "100px"}, 1300);
    $("#p-2").animate({height: "70px"}, 1400);
    $("#p-3").animate({height: "50px"}, 1500);
    $("#p-4").animate({height: "50px"}, 1600);
    $("#p-5").animate({height: "50px"}, 1700);

    $("#box-5").animate({width: "43%"}, 1200);

    colorBkgFadeStep4();

  };

  function colorBkgFadeStep3(){

    $("#p-0").animate({height: "0px"}, 600);
    $("#p-1").animate({height: "0px"}, 600);
    $("#p-2").animate({height: "0px"}, 600);
    $("#p-3").animate({height: "0px"}, 600);
    $("#p-4").animate({height: "0px"}, 600);
    $("#p-5").animate({height: "0px"}, 600);


    $("#box-5").animate({width: "0%"});


  };

  function colorBkgGrowStep4(){

    $("#box-6").animate({width: "21.25%"}, 1800);
    $("#box-7").animate({height: "86%"}, 2000);
    $("#box-8").animate({width: "25%"}, 1800);

    $("#d-1-name").animate({opacity: '1'}, 2400);

  };


  function colorBkgFadeStep4(){

    $("#box-6").animate({width: "0%"}, {opacity: '0'});
    $("#box-7").animate({height: "0%"}, {opacity: '0'});
    $("#box-8").animate({width: "0%"}, {opacity: '0'});

    $("#d-1-name").animate({opacity: '0'});


  };


  function colorBkgGrowStep6(){

    $("#box-9").animate({height: "80rem"}, 1800);
    $("#box-10").animate({height: "11%"}, 1800);
    $("#trumpet").animate({opacity: '1'}, 1800);

  };


  function colorBkgFadeStep6(){

    $("#box-9").animate({height: "0%"});
    $("#box-10").animate({height: "0%"});
    $("#trumpet").animate({opacity: '0'});

  };


    function colorBkgGrowStep8(){

    $("#box-11").animate({height: "80rem"}, 1800);
    $("#box-12").animate({height: "10%"}, 2000);

  };

    function colorBkgFadeStep8(){

    $("#box-11").animate({height: "0%"}, 2000);
    $("#box-12").animate({height: "0%"}, 2000);
  
  };
  


  function colorBkgGrowStep10(){

    $("#box-13").animate({width: "85%"}, 1500);
    $("#box-14").animate({width: "20%"}, 1000);

  };

   function colorBkgFade10(){

    $("#box-13").animate({width: "0%"}, 600);
    $("#box-14").animate({width: "0%"}, 600);

  };


  function colorBkgGrowStep11(){

    $("#d-2-name").animate({opacity: '1'}, 1800);

  }



  function colorBkgGrowStep13(){

    $("#box-18").animate({height: "80rem"}, 1800);
    $("#box-19").animate({height: "10%"}, 1800);

  };


  function colorBkgGrowStep15(){

    $("#box-20").animate({height: "75rem"}, 1800);
    $("#box-21").animate({height: "13%"}, 1800);

  };








  


});