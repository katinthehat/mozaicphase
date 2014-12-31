// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pickColor() {
    var colorOptions = [
       '#FF0066',
       '#99FFFF',
       '#66FF33',
       '#FFFF00',
       '#990066',
       '#9980FE',
     ];
    var colorNumber = getRandomInt(0, 6);
    return colorOptions[colorNumber];
}

function createSquareTemplate() {
  var square = $("<div></div>");
  var chosenColor = pickColor();
  var displayOptions = ['block', 'inline-block', 'inline-block', 'inline-block'];
  var optionNumber = getRandomInt(0, 4);
  var displayOption = displayOptions[optionNumber];
  console.log(displayOption);
  square.css('display', displayOption);
  square.css('width', 10);
  square.css('height', 10);
  square.css('margin', 1);
  square.css('border-style', 'solid');
  square.css('border-color', '#777');
  square.css('border-width', '1');
  square.css('background-color', chosenColor);
  return square;
}

function addSquareToBucket(target, squareTemplate) {
    $(target).append(squareTemplate);
}

var recursiveCount = 0;
function appendToBucketRecursive(target, limit) {
    setTimeout(function() {
        var squareTemplate = createSquareTemplate();
        addSquareToBucket(target, squareTemplate);
        
        recursiveCount++;
        if(recursiveCount < limit) {
            appendToBucketRecursive(target, limit);
        }
    }, 50)
}

function appendAllToBucket(target, limit) {
    for (var c = 0; c < limit; c++) {
        var squareTemplate = createSquareTemplate();
        addSquareToBucket(target, squareTemplate);
    }
}

appendToBucketRecursive('#main_bucket', 300);

