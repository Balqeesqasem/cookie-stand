'use strict';
 var houer =  ['6 AM' , '7 AM', '8 AM', '9 AM', '10 AM' , '11 AM' , '12 PM', '1 PM', '2 PM', '3 PM', '4 PM' , '5 PM' , '6 PM', '7 PM'];
 var shopeLocation = [];

 //helper function 

function getRandomNumCust(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min); //The maximum is exclusive and the minimum is inclusive
  }


// constructer function 

function Shope(shopeName ,minimumCustomers ,maximumCustomers ,averageCookies){
    this.shopeName=shopeName;
    this.minimumCustomers =minimumCustomers; // all of thim dynamic proparities 
    this.maximumCustomers =maximumCustomers;
    this.averageCookies=averageCookies;
    this.getNumCus;
    this.numCus =[];
    this.totalNumCooki =0;
    this.numCooke= [];
    shopeLocation.push(this);
    this.getNumCus();
  
    //console.log(this);
    
    }

    
// method
    Shope.prototype.getNumCus = function (){
        var totalNumCooki =0;
        for(var i=0;i<houer.length;i++) {

           this.numCus[i]=(getRandomNumCust(this.minimumCustomers,this.maximumCustomers));
           
           this.numCooke.push(Math.ceil(this.numCus[i] * this.averageCookies));
           
           this.totalNumCooki = this.totalNumCooki + this.numCooke[i];

        }
        //console.log(this.numCus);
        //console.log(this.numCooke);
        
    };

    Shope.prototype.render = function () {
        
        var tr = document.createElement('tr');
        table.appendChild(tr);
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.shopeName;
        for(var i = 0; i< houer.length ; i++){
            td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = this.numCooke[i];
        }
        var tdTotal = document.createElement('td');
        tr.appendChild(tdTotal);
        tdTotal.textContent =  this.totalNumCooki;
       
    };

//obj
 new Shope('Seattle',32, 65, 6.3);
 new Shope('Tokyo',3 , 24,1.2);
 new Shope('Dubai' , 11,38,3.7 );
 new Shope('Paris',20 ,38, 2.3 );
 new Shope ('Lima' , 2, 16 , 4.6);


 // creat table 

var container = document.getElementById('show');
var table = document.createElement('table');
container.appendChild(table);

function renderTableHeader(){

    var tr =document.createElement('tr');
        table.appendChild(tr);
      
    var thEmpty =document.createElement('th');
        tr.appendChild(thEmpty);
        thEmpty.textContent='';
     
    for (var i=0 ; i<houer.length ; i++){

        var th =document.createElement('th');
        tr.appendChild(th);
        th.textContent=houer[i];
    }
    var thTotal =document.createElement('th');
        tr.appendChild(thTotal);
        thTotal.textContent='Total';

}


function renderTableFooter(){

    var trFooter =document.createElement('tr');
        table.appendChild(trFooter);
        var tdFooter = document.createElement('td');
        trFooter.appendChild(tdFooter);
        tdFooter.textContent = 'Total';
        var totalPerHouer ;
        var totalOfTotal =0;
        
        for (var i=0 ; i<houer.length ; i++){
            totalPerHouer = 0;
         
      for ( var j=0 ; j<shopeLocation.length ; j++){
        totalPerHouer = totalPerHouer + shopeLocation[j].numCooke[i];
      
      }
      totalOfTotal = totalOfTotal +totalPerHouer;
      var tdFooter = document.createElement('td');
      trFooter.appendChild(tdFooter);
      tdFooter.textContent=totalPerHouer;
     
     }
      
      var tdTotalOfTotal = document.createElement('td');
      trFooter.appendChild(tdTotalOfTotal);
      tdTotalOfTotal.textContent= totalOfTotal;

}


// submit form

var form = document.getElementById('form');
form.addEventListener('submit', function (addShope) {
table.removeChild(table.lastChild);
    addShope.preventDefault();
    //console.log(event.target.lowestValue.value);

    var shopeName = addShope.target.shopeName.value;
    var minimumCustomers = addShope.target.minimumCustomers.value;
    var maximumCustomers = addShope.target.maximumCustomers.value;
    var averageCookies = addShope.target.averageCookies.value;
    var newLocation = new Shope(shopeName ,minimumCustomers ,maximumCustomers ,averageCookies);
    
     newLocation.render();
    
     renderTableFooter();
     
    
    
} )


renderTableHeader();


//to call render function each time we have obj 
for(var i = 0 ; i < shopeLocation.length ; i++){
    shopeLocation[i].render();
    
  }

  
  

  
