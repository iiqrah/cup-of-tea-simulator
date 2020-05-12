var TeaName = '';
var TeaSugar = '';
var TeaSize= '';

 document.getElementById("pourBtn").disabled = true;

function getTea(teaSelection){
  if(!teaSelection)
  {
    TeaName = document.getElementById("teaSelection").value;
  }
  else
  {
    TeaName = teaSelection;
  }
  
  console.log(TeaName);
}

function getSugar()
{
  TeaSugar = document.getElementById("sugarAmount").value;
}

function getCupSize()
{
  TeaSize = document.getElementById("cupSize").value;
}

function getCup(callback)
{
  setTimeout(function(){
    var msg = "Getting a " + TeaSize + " cup ready.";
    document.getElementById("resultMessage").innerHTML = msg;;
  }, 1000); 
  callback();
}

function addTeaBag(callback)
{
  setTimeout(function(){
    var msg = "Adding a " + TeaName + " teabag in the cup.";
    document.getElementById("resultMessage").innerHTML = msg;
  }, 3000); 
  callback();
}

function addSugar(callback)
{
  setTimeout(function(){
    var msg = "Adding " + TeaSugar + " spoons of sugar in the cup.";
    document.getElementById("resultMessage").innerHTML = msg;;
  }, 5000); 
  callback();
}

function kettleBoiled(callback)
{
  callback();
  setTimeout(function(){
    var msg = "Boiling the kettle...";
    document.getElementById("resultMessage").innerHTML = msg;
  }, 7000); 
  callback();
}

function boilKettle(callback)
{
   // Boil the kettle based on the amount of the cup size.
   var waitTime = 0;
   if(TeaSize == "small")
   {
      waitTime = 9000;
   }
   else if (TeaSize == "medium")
   {
     waitTime = 11000;
   }
   else if (TeaSize == "large")
   {
     waitTime = 13000; 
   }
   else
   {
     waitTime = 15000; 
   }
   setTimeout(function(){
    var msg = "Kettle Boiled!";
    document.getElementById("pourBtn").disabled = false;
    document.getElementById("makeTea").hidden = true;
    document.getElementById("resultMessage").innerHTML = msg;;
  }, waitTime);
 
   callback();
}

function pour(callback)
{
  setTimeout(function(){
    var msg = "Pouring the water in...";
    document.getElementById("resultMessage").innerHTML = msg;
  }, 2000); 
  callback();
}

function stirCup(callback)
{
  setTimeout(function(){
    var msg = "Stiring your cup of tea";
    document.getElementById("resultMessage").innerHTML = msg;
  }, 5000); 
  callback();
}

function presentTea(){
  setTimeout(function(){
    var msg = "All done! Enjoy your " + TeaName +"! :) ";
    document.getElementById("pourBtn").disabled = true;
    document.getElementById("resultMessage").innerHTML = msg;
  }, 8000); 
}


function makeTea()
{
  //Get the selection of tea from the user

  // Identify if the user pressed a button and get the tea name.
  if (!TeaName)
  {
    getTea();
  }
  // Get the amount of the sugar.
  getSugar();
  // Get the size of the cup.
  getCupSize();

  // Make sure we have the correct details.
  console.log('Sugar' + TeaSugar);
  console.log('Size' + TeaSize);

  startTea();
}


function startTea()
{
  console.log("starting tea");
  // Make the tea
  getCup(function(){
    addTeaBag(function(){
      addSugar(function(){
        boilKettle(function(){ 
          kettleBoiled(function(){

          });
        });
      });
    });
  });  
}

function finishTea()
{
  console.log("finishing the tea");
  pour(function(){
    stirCup(function(){
      presentTea(function(){

      });
    });
  });
}
  