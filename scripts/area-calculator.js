// Triangle
function buttonOnClicked() {
  //   Get triangle base value
  const baseValue = document.getElementById("inputNo1");
  const baseValueString = baseValue.value;
  const baseValueFloat = parseFloat(baseValueString);

  //   Get triangle height value
  const heightValue = document.getElementById("inputNo2");
  const heightValueString = heightValue.value;
  const heightValueFloat = parseFloat(heightValueString);
  console.log(heightValueFloat);

  // use the value in triangle formulla and apply it to Area Field:
  const area = 0.5 * baseValueFloat * heightValueFloat;
  const areaOutput = document.getElementById("areaValue");
  areaOutput.innerText = area;
  // Add to the Calculation entry
  addToCalculationEntry("Triangle", area);
}

// For rectangle
function rectangleButtonOnClicked() {
  // Get the width value
  const widthValue = document.getElementById("rectangleInputNo1");
  const widthValueString = widthValue.value;
  const widthValueFloat = parseFloat(widthValueString);

  // Get the length value
  const lengthValue = document.getElementById("rectangleInputNo2");
  const lengthValueString = lengthValue.value;
  const lengthValueFloat = parseFloat(lengthValueString);

  // validation check for input width and height for rectangle:
  if (isNaN(widthValueFloat) || isNaN(lengthValueFloat)) {
    alert("Please insert a number");
    return;
  }
  // use the value in rectangle formulla and apply it in Area Field:
  const rectangleArea = widthValueFloat * lengthValueFloat;
  const rectangleAreaOutput = document.getElementById("rectangleAreaValue");
  rectangleAreaOutput.innerText = rectangleArea;
  // Add to the Calculation entry
  addToCalculationEntry("Rectangle", rectangleArea);
}

// From here,we use Reusable function --> reduce duplicate code
//Parallelogram
function parallelogramButtonOnClicked() {
  const base = getInputValue("prarllelogramInputNo1");
  const height = getInputValue("prarllelogramInputNo2");
  // Validation check
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
  }
  const area = base * height;
  // calling the area function
  getArea("prarllelogramAreaValue", area);

  // Add to the Calculation entry
  addToCalculationEntry("Parallelogram", area);
}

// Ellipse
function ellipseButtonOnClicked() {
  const ellipseFirstRadius = getInputValue("ellipseInputNo1");
  const ellipseSecondRadius = getInputValue("ellipseInputNo2");
  const ellipseArea = 3.14 * ellipseFirstRadius * ellipseSecondRadius;
  const ellipseAreaToFixed = ellipseArea.toFixed(2);
  // set the area value by using function
  getArea("ellipseAreaValue", ellipseAreaToFixed);

  // Add to the Calculation entry
  addToCalculationEntry("Ellipse", ellipseAreaToFixed);
}

// Resuable get input value function

function getInputValue(elementId) {
  const inputField = document.getElementById(elementId);
  const inputFieldString = inputField.value;
  const inputFieldFloat = parseFloat(inputFieldString);
  return inputFieldFloat;
}

// set the area value by using function
function getArea(areaId, value) {
  const areaValue = document.getElementById(areaId);
  areaValue.innerText = value;
}
//Data Validation:
// 1.Set the proper type of Data in Input field.(Number, date ,email)
// 2. check type using typeOf.
// 3. NaN means not a number, isNaN(99) is NaN is checking whether an input is not a number.
// -----------------------------------------
// Add the calculation entry:

// Step1: get the element where you want to add the dynamic HTML
// Step2: create an element you want to add and put the tag name of your create element
// Step3: If needed add some class
// Step4: Set inner HTML it could be dynamic Template string(`${}  ${}`).
// Step5: Append the created element as the child of the parent.

function addToCalculationEntry(areaType, area) {
  console.log(areaType + " " + area);
  const calculationEntry = document.getElementById("area-calculator");
  // Creating count
  const count = calculationEntry.childElementCount;
  const createElement = document.createElement("p");
  createElement.classList.add("my-4"); //ekta class add korlam
  createElement.innerHTML = `${
    count + 1
  }. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
  calculationEntry.appendChild(createElement);
}
