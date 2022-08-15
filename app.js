// https://calculator.swiftutors.com/area-of-a-sector-of-a-circle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofaSectorofaCircleRadio = document.getElementById('areaofaSectorofaCircleRadio');
const radiusoftheCircleRadio = document.getElementById('radiusoftheCircleRadio');
const centralAngleRadio = document.getElementById('centralAngleRadio');

let areaofaSectorofaCircle;
const PI = Math.PI;
let radiusoftheCircle = v1;
let centralAngle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

areaofaSectorofaCircleRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Radius of the Circle';
  variable2.textContent = '(C) Central Angle (degrees)';
  radiusoftheCircle = v1;
  centralAngle = v2;
  result.textContent = '';
});

radiusoftheCircleRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area of a Sector of a Circle';
  variable2.textContent = '(C) Central Angle (degrees)';
  areaofaSectorofaCircle = v1;
  centralAngle = v2;
  result.textContent = '';
});

centralAngleRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area of a Sector of a Circle';
  variable2.textContent = '(R) Radius of the Circle';
  areaofaSectorofaCircle = v1;
  radiusoftheCircle = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofaSectorofaCircleRadio.checked)
    result.textContent = `Area of a Sector of a Circle = ${computeAreaofaSectorofaCircle().toFixed(2)}`;

  else if(radiusoftheCircleRadio.checked)
    result.textContent = `Radius of the Circle = ${computeRadiusoftheCircle().toFixed(2)}`;

  else if(centralAngleRadio.checked)
    result.textContent = `Central Angle = ${computeCentralAngle().toFixed(2)}`;
})

// calculation

function computeAreaofaSectorofaCircle() {
  return PI * Math.pow(Number(radiusoftheCircle.value), 2) * (Number(centralAngle.value) / 360);
}

function computeRadiusoftheCircle() {
  return Math.sqrt(Number(areaofaSectorofaCircle.value) / (PI * (Number(centralAngle.value) / 360)));
}

function computeCentralAngle() {
  return (Number(areaofaSectorofaCircle.value) / (PI * Math.pow(Number(radiusoftheCircle.value), 2))) * 360;
}