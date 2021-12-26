/**
 * 
 * In this function, you will have to draw a vertical line with `n` length
 * for example `drawVLine(5) should print out 
  # 
  # 
  # 
  # 
  # 
 */
function drawVLine(n) {
  // Continue the code here
  for (let index = 0; index <n; index++) {
  
    console.log(`#`)
  }
}
//drawVLine(5);
/**
 *
 * In this function, you will have to draw a horizontal line with `n` length
 * for example `drawHLine(5) should print out # # # # # (there are spaces here!)
 */
function print (text){
  process.stdout.write(text);
}

function drawHLine(n) {
  // Continue the code here
  for (let i = 0; i < n; i++) {
    print("# ")
  }
  console.log();
  }
  //drawHLine (5);
/**
 * 
 * In this function, you will have to draw a square with a length of `n` 
 * for example `drawSquare(5) should print out 
 
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #

 */
function drawSquare(n) {
  // Continue the code here
  for (let r = 0; r < n; r++) {
    
    for (let  c= 0; c<n; c++) {
      print ("# ")
    }
    console.log ();
  }
}
//drawSquare(5);


/**
 * 
 * In this function, you will have to draw a triangle with a length of `n` 
 * for example `drawLeftTriangle(5) should print out 
 
  #  
  #  #  
  #  #  #  
  #  #  #  #  
  #  #  #  #  #

 */
function drawLeftTriangle(n) {
  // Continue the code here
  for (let r = 0; r < n; r++) {
    for (let c = 0; c <= r; c++) {
     print ("# ")
    }
    console.log()
  }
}
drawLeftTriangle (5)
/**
 * 
 * In this function, you will have to draw a tree with a length of `n` 
 * for example `drawTree(5) should print out 
 
     #   
    # #   
   # # # 
  # # # # 
     #

 */
function drawTree(n) {
  // Continue the code here
  for (let r = 0; r < n; r++) {
    for (let s = n; s >=1; s--) {
      print (" ")
    }
      for (let c = 0; c <= r; c++) {
        print("# ")
      }
    console.log();
  }
  for (let i = 0; i < n; i++) {
    print(" ")
  }
  console.log("#")
}
drawTree (10);
/**
 *
 * In this example, you will create 4 arrays, `yellowCards`, `greenCards`, `redCards`, `blueCards`
 * (BONUS) Try to optimize the code with doing it with one gigantic loop
 */
function fillUnoDeck() {
  let greenCards = [];
  let yellowCards = [];
  let redCards = [];
  let blueCards = [];
  // Fill the cards here
  for (let i = 0; i < 10; i++) {
    greenCards.push(i);
    yellowCards.push(i);
    redCards.push(i);
    blueCards.push(i);
  }
  console.log(greenCards, yellowCards, redCards, blueCards);
}
fillUnoDeck();
