let bulbX = 0

let rowOne = 94

let rowTwo = 94
let rowTwo1 = 94
let rowTwo2 = 94

let rowThree = 94
let rowThree1 = 94
let rowThree2 = 94

let rowFour = 94
let rowFour1 = 94
let rowFour2 = 94

let rowFive = 94
let rowFive1 = 94
let rowFive2 = 94

let rowSix = 94
let rowSix1 = 94
let rowSix2 = 94

let rowSeven = 94
let rowSeven1 = 94
let rowSeven2 = 94

let rowEight = 94
let rowEight1 = 94
let rowEight2 = 94

let rowNine = 94
let rowNine1 = 94
let rowNine2 = 94

let rowTen = 94


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  
  //floor
  fill("grey");
  stroke("grey");
  rect(0, 300, 600, 100);
  
  //lightbulb
  fill("yellow");
  stroke("#FFC107")
  strokeWeight(7)
  circle(bulbX, 200, 70);
  
//moving lightbulb
bulbX = mouseX;
  
  //template
  //fill("red");
  //stroke("red");
  //strokeWeight(0);
  //rect(225, 100, 150, 225)
  
  //subject
  
  //row 1
  fill(rowOne, 2, 2);
  stroke(rowOne, 2, 2)
  strokeWeight(0);
  rect(225, 100, 15, 15);
  rect(225, 115, 15, 195);
  rect(225, 100 + 210, 15, 15);
  
  //row 2
  fill(rowTwo, 2, 2);
  stroke(rowTwo, 2, 2)
   rect(240, 115, 15, 195);
  rect(240, 310, 15, 15);
  
    fill(rowTwo1, 2, 2);
  stroke(rowTwo1, 2, 2)
  rect(240, 100, 15, 15);
  
  //row 3
  fill(rowThree, 2, 2);
  stroke(rowThree, 2, 2)
    rect(255, 115, 15, 195);
   rect(255, 310, 15, 15);
  
    fill(rowThree1, 2, 2);
  stroke(rowThree1, 2, 2)
  rect(255, 100, 15, 15);
  
  //row 4
  fill(rowFour, 2, 2);
  stroke(rowFour, 2, 2)
    rect(270, 115, 15, 195);
    rect(270, 310, 15, 15);
  
    fill(rowFour1, 2, 2);
  stroke(rowFour1, 2, 2)
  rect(270, 100, 15, 15);
  
  //row 5
  fill(rowFive, 2, 2);
  stroke(rowFive, 2, 2)
   rect(285, 115, 15, 195);
    rect(285, 310, 15, 15);
  
    fill(rowFive1, 2, 2);
  stroke(rowFive1, 2, 2)
  rect(285, 100, 15, 15);
  
  //row 6
  fill(rowSix1, 2, 2);
  stroke(rowSix1, 2, 2)
  rect(300, 100, 15, 15);
  
    fill(rowSix, 2, 2);
  stroke(rowSix, 2, 2)
  rect(300, 115, 15, 195);
  rect(300, 310, 15, 15);
  
  //row 7
  fill(rowSeven1, 2, 2);
  stroke(rowSeven1, 2, 2)
  rect(315, 100, 15, 15);
  
    fill(rowSeven, 2, 2);
  stroke(rowSeven, 2, 2)
  rect(315, 115, 15, 195);
  rect(315, 310, 15, 15);
  
  //row 8
  fill(rowEight, 2, 2);
  stroke(rowEight, 2, 2)
  rect(330, 100, 15, 15);
  
    fill(rowEight, 2, 2);
  stroke(rowEight, 2, 2)
  rect(330, 115, 15, 195);
  rect(330, 310, 15, 15);
  
  //row 9
  fill(rowNine1, 2, 2);
  stroke(rowNine1, 2, 2)
  rect(345, 100, 15, 15);
  
    fill(rowNine, 2, 2);
  stroke(rowNine, 2, 2)
  rect(345, 115, 15, 195);
  rect(345, 310, 15, 15);
  
  //row 10
  fill(rowTen, 2, 2);
  stroke(rowTen, 2, 2)
  rect(360, 100, 15, 15);
  rect(360, 115, 15, 195);
  rect(360, 310, 15, 15);
  
  //1
  
  if(bulbX > 0 && bulbX < 60){
    rowOne = 225
    rowTwo = 225
    rowTwo1 = 225
    rowThree = 220
    rowThree1 = 220
    rowFour = 210
    rowFour1 = 210
    rowFive = 190
    rowFive1 = 190
    rowSix = 170
    rowSix1 = 170
    rowSeven = 150
    rowSeven1 = 150
    rowEight = 130
    rowEight1 = 130
    rowNine = 110
    rowNine1 = 110
    rowTen = 94
  }
  
  //2
  
  if(bulbX > 60 && bulbX < 120){    
    rowOne = 225
    rowTwo = 220
    rowTwo1 = 220
    rowThree = 210
    rowThree1 = 210
    rowFour = 190
    rowFour1 = 190
    rowFive = 170
    rowFive1 = 170
    rowSix = 150
    rowSix1 = 150
    rowSeven = 130
    rowSeven1 = 130
    rowEight = 110
    rowEight1 = 110
    rowNine = 94
    rowNine1 = 94
    rowTen = 94
    
  }
  
  //3
  
    if(bulbX > 120 && bulbX < 180){    
    rowOne = 220
    rowTwo = 210
    rowTwo1 = 210
    rowThree = 190
    rowThree1 = 190
    rowFour = 170
    rowFour1 = 170
    rowFive = 150
    rowFive1 = 150
    rowSix = 130
    rowSix1 = 130
    rowSeven = 110
    rowSeven1 = 110
    rowEight = 94
    rowEight1 = 94
    rowNine = 94
    rowNine1 = 94
    rowTen = 94
    
  }

  //4
  
      if(bulbX > 180 && bulbX < 240){    
    rowOne = 210
    rowTwo = 190
    rowTwo1 = 190
    rowThree = 170
    rowThree1 = 170
    rowFour = 150
    rowFour1 = 150
    rowFive = 130
    rowFive1 = 130
    rowSix = 110
    rowSix1 = 110
    rowSeven = 94
    rowSeven1 = 94
    rowEight = 94
    rowEight1 = 94
    rowNine = 110
    rowNine1 = 110
    rowTen = 130
    
  }
  
  //5
  
    if(bulbX > 240 && bulbX < 300){    
    rowOne = 190
    rowTwo = 170
    rowTwo1 = 170
    rowThree = 150
    rowThree1 = 150
    rowFour = 130
    rowFour1 = 130
    rowFive = 110
    rowFive1 = 110
    rowSix = 94
    rowSix1 = 94
    rowSeven = 94
    rowSeven1 = 94
    rowEight = 110
    rowEight1 = 110
    rowNine = 130
    rowNine1 = 130
    rowTen = 150
    
  }
  
  //6
  
    if(bulbX > 300 && bulbX < 360){    
    rowOne = 170
    rowTwo = 150
    rowTwo1 = 150
    rowThree = 130
    rowThree1 = 130
    rowFour = 110
    rowFour1 = 110
    rowFive = 94
    rowFive1 = 94
    rowSix = 94
    rowSix1 = 94
    rowSeven = 110
    rowSeven1 = 110
    rowEight = 130
    rowEight1 = 130
    rowNine = 150
    rowNine1 = 150
    rowTen = 170
    
  }
  
  //7
  
    if(bulbX > 360 && bulbX < 420){    
    rowOne = 150
    rowTwo = 130
    rowTwo1 = 130
    rowThree = 110
    rowThree1 = 110
    rowFour = 94
    rowFour1 = 94
    rowFive = 94
    rowFive1 = 94
    rowSix = 110
    rowSix1 = 110
    rowSeven = 130
    rowSeven1 = 130
    rowEight = 150
    rowEight1 = 150
    rowNine = 170
    rowNine1 = 170
    rowTen = 190
    
  }
  
  //8
  
    if(bulbX > 420 && bulbX < 480){    
    rowOne = 130
    rowTwo = 110
    rowTwo1 = 110
    rowThree = 94
    rowThree1 = 94
    rowFour = 94
    rowFour1 = 94
    rowFive = 110
    rowFive1 = 110
    rowSix = 130
    rowSix1 = 130
    rowSeven = 150
    rowSeven1 = 150
    rowEight = 170
    rowEight1 = 170
    rowNine = 190
    rowNine1 = 190
    rowTen = 210
    
  }
  
  //9
  
    if(bulbX > 480 && bulbX < 540){    
    rowOne = 110
    rowTwo = 94
    rowTwo1 = 94
    rowThree = 94
    rowThree1 = 94
    rowFour = 110
    rowFour1 = 110
    rowFive = 130
    rowFive1 = 130
    rowSix = 150
    rowSix1 = 150
    rowSeven = 170
    rowSeven1 = 170
    rowEight = 190
    rowEight1 = 190
    rowNine = 210
    rowNine1 = 210
    rowTen = 225
    
  }
  
  //10
  
  if(bulbX > 540 && bulbX < 600){
    rowTen = 225
    rowNine = 225
    rowNine1 = 225
    rowEight = 220
    rowEight1 = 220
    rowSeven = 210
    rowSeven1 = 210
    rowSix = 190
    rowSix1 = 190
    rowFive = 170
    rowFive1 = 170
    rowFour = 150
    rowFour1 = 150
    rowThree = 130
    rowThree1 = 130
    rowTwo = 110
    rowTwo1 = 110
    rowOne = 94
  }
 
  

  
  
  
  
  
  
  
  
}