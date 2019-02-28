var gameMarker = "x";
var myButtons;

function changeMarkerToX()
  {
    placeMark('home');
    console.log("The x button was clicked!");
    // return true;
}

function changeMarkerToO()
  {

    placeMark('home');
    console.log("The O button was clicked!");
    // return true;
  }

function placeMark(id)
  {
    switch (id) {
      case "home":
        //code for center
        document.getElementById("home").innerHTML = gameMarker;
        break;
      case "up":
      //code
        document.getElementById("down").innerHTML = gameMarker;
        break;
      case "down":
      //code
        document.getElementById("left").innerHTML = gameMarker;
        break;
      case "left":
      //code
        document.getElementById("right").innerHTML = gameMarker;
        break;
      case "right":
      //code
        document.getElementById("top-left").innerHTML = gameMarker;
        break;
      case "top-left":
      //code
        document.getElementById("top-right").innerHTML = gameMarker;
        break;
      case "top-right":
      //code
        document.getElementById("bottom-left").innerHTML = gameMarker;
        break;
      case "bottom-left":
      //code
        document.getElementById("bottom-right").innerHTML = gameMarker;
        break;
      case "bottom-right":
      //code
        document.getElementById()
        break;

      default:
      alert("Something went wrong");
    }
    // let theButton = document.getElementById(id);
    // document.getElementById(id).innerHTML=gameMarker;
  }
