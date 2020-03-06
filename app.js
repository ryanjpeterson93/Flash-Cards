
function change_text(){
  document.getElementById("card-text").innerHTML = "this";
  }
function change_text1(){
  document.getElementById("card-text1").innerHTML = "A Test is used to double check a function, to make sure it isn't 'breaking' ";
  }
function change_text2(){
  document.getElementById("card-text2").innerHTML = "map iterates over each element of an array and creates a new array";
  }



  let x = 0;
  const array = Array();
  
  function add_element_to_array()
  {
   array[x] = document.getElementById("text1").value;
   x++;
   document.getElementById("text1").value = "";
  
   let e = "<p>";   
      
   for (let y=0; y<array.length; y++)
   {
     e += `${array[y]} <br/>`;
   }
   document.getElementById("Result").innerHTML = e;
  }

  // function deletePara() {
  //   document.getElementsByTagName('p').addEventListener("click").innerHTML = "Changed it"
  // }