/* eslint-disable indent */
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//helper function
function getRandomIntsalamon(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var salmonShops  = [];
var container = document.getElementById('contanir');
var tableEl = document.createElement('table');
container.appendChild(tableEl);

function Salamon(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHourArr = [];
  this.total = 0;
  console.log(this);
  salmonShops.push(this);
  this.getCokies();
}
Salamon.prototype.getCokies = function () {
  for (let index = 0; index < hours.length; index++) {
    var cookiesPerHour = Math.floor((getRandomIntsalamon(this.min, this.max) * this.avg));
    this.cookiesPerHourArr.push(cookiesPerHour);
    this.total += this.cookiesPerHourArr[index];
  }

};
Salamon.prototype.render = function () {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;
    for(var j = 0; j < hours.length ; j++){
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = this.cookiesPerHourArr[j];
    }
    var tdTotal = document.createElement('td');
    trEl.appendChild(tdTotal);
    tdTotal.textContent = this.total;
};
new Salamon('Seatle', '23', '65', '6.3');
new Salamon('Tokyo', '3', '24', '1.2');
new Salamon('Dubai', '11', '38', '3.7');
new Salamon('Paris', '20', '38', '2.3');
new Salamon('Lima', '2', '16', '4.6');

function renderHeader(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var thElEmpty = document.createElement('th');
  thElEmpty.textContent = ' ';
  trEl.appendChild(thElEmpty);
  for(var i = 0 ; i< hours.length ; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var thElTotal = document.createElement('th');
  thElTotal.textContent = 'Total';
  trEl.appendChild(thElTotal);

}
function renderFooter(){
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Total';
    var hourTotal;
    var megaTotal = 0;
    for(var hour = 0 ; hour < hours.length ; hour++){
        hourTotal = 0;
        for(var shop = 0 ; shop < salmonShops.length ; shop++){
            hourTotal += salmonShops[shop].cookiesPerHourArr[hour];
        }
        var tdElTotalHour = document.createElement('td');
        tdElTotalHour.textContent = hourTotal;
        megaTotal += hourTotal;
        trEl.appendChild(tdElTotalHour);
    }
    var tdMegaTotal = document.createElement('td');
    tdMegaTotal.textContent = megaTotal;
    trEl.appendChild(tdMegaTotal);

}
renderHeader();
for(var i = 0 ; i < salmonShops.length ; i++){
  salmonShops[i].render();
}
renderFooter();
