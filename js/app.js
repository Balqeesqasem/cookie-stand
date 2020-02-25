'use strict';
 var houer =  ['6 AM' , '7 AM', '8 AM', '9 AM', '10 AM' , '11 AM' , '12 PM', '1 PM', '2 PM', '3 PM', '4 PM' , '5 PM' , '6 PM', '7 PM'];

function Shope(shopeName ,minimumCustomers ,maximumCustomers ,averageCookies){
this.shopeName=shopeName;
this.minimumCustomers =minimumCustomers;
this.maximumCustomers =maximumCustomers;
this.averageCookies=averageCookies;
this.numCus =[];
this.totalNumCooki =0;
this.numCooke= [];



}
Shope.prototype.getNumCus = function (minimumCustomers,maximumCustomers){
    for(var i=0;i<houer.length;i++) 
    this.numCus[i]=(getRandomNumCust(minimumCustomers,maximumCustomers));
    
};

Shope.prototype.render = function (){
    this.getNumCus(this.minimumCustomers,this.maximumCustomers);
    
    var container = document.getElementById('show')
        var hed1 = document.createElement('h1');
        container.appendChild(hed1);
        hed1.textContent = this.shopeName;
        // console.log(hed1);
        var ul1 = document.createElement('ul');
        hed1.appendChild(ul1);
        var tot = document.createElement('p');
        container.appendChild(tot);

        for(var i=0 ; i<houer.length ;i++){
            this.numCooke.push(Math.ceil(this.numCus[i] * this.averageCookies));
           //console.log(this.numCus[i]);
            // console.log(this.[i]);
            this.totalNumCooki = this.totalNumCooki + this.numCooke[i];
            var li1 = document.createElement('li');
            li1.textContent = houer[i] +' : '+ this.numCooke[i] + ' cookies';
            ul1.appendChild(li1);
}tot.textContent = 'Total =' + this.totalNumCooki;
}


var Seattle = new Shope('Seattle',32, 65, 6.3);
var Tokyo = new Shope('Tokyo',3 , 24,1.2);
var Dubai = new Shope('Dubai' , 11,38,3.7 );
var Paris = new Shope('Paris',20 ,38, 2.3 );
var Lima = new Shope ('Lima' , 2, 16 , 4.6);

function getRandomNumCust(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min); //The maximum is exclusive and the minimum is inclusive
  }


Seattle.getNumCus(this.minimumCustomers,this.maximumCustomers);
Seattle.render();
Tokyo.getNumCus(this.minimumCustomers,this.maximumCustomers);
Tokyo.render();
Dubai.getNumCus(this.minimumCustomers,this.maximumCustomers);
Dubai.render();
Paris.getNumCus(this.minimumCustomers,this.maximumCustomers);
Paris.render();
Lima.getNumCus(this.minimumCustomers,this.maximumCustomers);
Lima.render();


var container = document.getElementById('show');
var table = document.createElement('table');
container.appendChild(table);
var th1 =document.createElement('th');
    th1.textContent= '      ' ;
    table.appendChild(th1);

for (var i=0; i<houer.length;i++){

    var th =document.createElement('th');
    th.textContent=houer[i] ;
    table.appendChild(th);
}

var th2 =document.createElement('th');
    th2.textContent= '  Total    ' ;
    table.appendChild(th2);

    
var tr1 = document.createElement('tr');
table.appendChild(tr1);
tr1.textContent=Seattle.shopeName  ;
for ( var i=0 ; i<houer.length ;i++){
var td1 = document.createElement('td');
td1.textContent=Seattle.numCooke[i];
tr1.appendChild(td1);}

var td6=document.createElement('td')
td6.textContent=Seattle.totalNumCooki;
tr1.appendChild(td6);



var tr2 = document.createElement('tr');
table.appendChild(tr2);
tr2.textContent=Tokyo.shopeName  ;
for ( var i=0 ; i<houer.length ;i++){
var td2 = document.createElement('td');
td2.textContent=Tokyo.numCooke[i];
tr2.appendChild(td2);}

var td7=document.createElement('td')
td7.textContent=Tokyo.totalNumCooki;
tr2.appendChild(td7);

var tr3 = document.createElement('tr');
table.appendChild(tr3);
tr3.textContent=Dubai.shopeName  ;
for ( var i=0 ; i<houer.length ;i++){
var td3 = document.createElement('td');
td3.textContent=Dubai.numCooke[i];
tr3.appendChild(td3);}

var td8=document.createElement('td')
td8.textContent=Dubai.totalNumCooki;
tr3.appendChild(td8);

var tr4 = document.createElement('tr');
table.appendChild(tr4);
tr4.textContent=Paris.shopeName  ;
for ( var i=0 ; i<houer.length ;i++){
var td4 = document.createElement('td');
td4.textContent=Paris.numCooke[i];
tr4.appendChild(td4);}

var td9=document.createElement('td')
td9.textContent=Paris.totalNumCooki;
tr4.appendChild(td9);

var tr5 = document.createElement('tr');
table.appendChild(tr5);
tr5.textContent=Lima.shopeName  ;
for ( var i=0 ; i<houer.length ;i++){
var td5 = document.createElement('td');
td5.textContent=Lima.numCooke[i];
tr5.appendChild(td5);}

var td10=document.createElement('td')
td10.textContent=Lima.totalNumCooki;
tr5.appendChild(td10);


var tr6 = document.createElement('tr');
table.appendChild(tr6);
tr6.textContent='Total'  ;


var totalPerHouert = [];
var totalPerHouer = 0;
for( var i=0 ; i<houer.length ; i++){

    totalPerHouer =  Seattle.numCooke[i] + Tokyo.numCooke[i] + Dubai.numCooke[i] + Paris.numCooke[i] + Lima.numCooke[i];
    totalPerHouert.push(totalPerHouer);
    console.log()
    var td11=document.createElement('td');
    td11.textContent=totalPerHouert[i];
    tr6.appendChild(td11);

}

var totalOfTotal = Seattle.totalNumCooki + Tokyo.totalNumCooki + Dubai.totalNumCooki + Paris.totalNumCooki + Lima.totalNumCooki;
var td12=document.createElement('td');
    td12.textContent=totalOfTotal;
    tr6.appendChild(td12);



// var shope = []
// for( var i=0 ; i<houer.length ; i++){
//     var totalOfTotal =0;
//     var colomSum =0 ;
//     for(var j=0 ; j<shope.length;j++){
//         colomSum=colomSum+Shope[j].numCooke[i];
//         totalOfTotal =totalOfTotal + colomSum;
//     }
// }
// console(totalOfTotal)


// for( var i=0 ; i<houer.length ; i++){
//     var td11 = document.createElement('td');
//     td11.textContent= td1+td2+td3;
//     tr6.appendChild(td11);
// }

// var td11 = document.createElement('td');
// td11.textContent=Seattle.numCooke +Tokyo.numCooke;
// tr6.appendChild(td11);
