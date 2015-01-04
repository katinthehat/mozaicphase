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
  var displayOption = 'inline-block';
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

function createRowTemplate() {
  var row = $("<div></div>");
  var rowId = getRandomInt(1, 1000000000) + "_row";
  row.attr('id', rowId);
  return row;
}

function addTemplateToTarget(target, template) {
  $(target).append(template);
}

var rowCount = 0;
var colCount = 0;
function appendToBucketRecursive(target, maxRows, maxCols, rowTemplate) {
  setTimeout(function() {

    var rowIdTarget = '#' + rowTemplate.attr('id');

    if(colCount == maxCols) {
      colCount = 0;
      var row = createRowTemplate();
      rowTemplate = row;
      rowIdTarget = '#' + row.attr('id');
      rowCount++;
    }

    if(rowCount < maxRows) {

      if(!$(rowIdTarget).length){
        addTemplateToTarget(target, rowTemplate);
      }

      var squareTemplate = createSquareTemplate();
      addTemplateToTarget(rowIdTarget, squareTemplate);

      appendToBucketRecursive(target, maxRows, maxCols, rowTemplate);
    }

    colCount++;
  }, 25);
}

var r = createRowTemplate();
var maxRows = 30;
var maxCols = 30;
appendToBucketRecursive('#main_bucket', maxRows, maxCols, r);

