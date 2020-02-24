'use strict';
var seattleShope = {
    shopeName : 'Seattle',
    minimumCustomers : 32,
    maximumCustomers : 65,
    averageCookies : 6.3,
    numCus: 0,
    numCooke:[],
    totalNumCooki : 0,
    houer : ['6 AM' , '7 AM', '8 AM', '9 AM', '10 AM' , '11 AM' , '12 PM', '1 PM', '2 PM', '3 PM', '4 PM' , '5 PM' , '6 PM', '7 PM'],
    getNumCus : function( minimumCustomers , maximumCustomers){
        for(var i=0 ; i<this.houer.length ;i++){
            this.numCus = getRandomNumCust(this.minimumCustomers , this.maximumCustomers);
           // console.log(NumCus);
          
            this.numCooke.push(Math.ceil(this.numCus * this.averageCookies));
            // this.numCooke=Math.ceil(this.numCooke);
           this.totalNumCooki = this.totalNumCooki + this.numCooke[i];
           
           this.totalNumCooki=Math.ceil(this.totalNumCooki);
           console.table(`${this.houer[i]} we have ${this.numCus} customers we should have ${this.numCooke[i]} in this houer `);
          
        }
        console.log(`total  ${this.totalNumCooki}`);
    },


    

    render : function(){
        
        var container = document.getElementById('show')
        var hed1 = document.createElement('h1');
        container.appendChild(hed1);
        hed1.textContent = this.shopeName;
        console.log(hed1);
        var ul1 = document.createElement('ul');
        hed1.appendChild(ul1);
        var tot = document.createElement('p');
        container.appendChild(tot);

        for(var i=0 ; i<this.houer.length ;i++){
            var li1 = document.createElement('li');
            li1.textContent = this.houer[i] +' : '+ this.numCooke[i] + ' cookies';
            ul1.appendChild(li1);
           
        }
            
            tot.textContent = 'Total =' + this.totalNumCooki;
} 
 
} ;


 console.log(seattleShope.getNumCus());
//  console.log(seattleShope.getcookenum());
 console.log(seattleShope.render());
 




 var tokyoShope = {
    shopeName : 'Tokyo',
    minimumCustomers : 3,
    maximumCustomers : 24,
    averageCookies : 1.2,
    numCus: 0,
    numCooke:[],
    totalNumCooki : 0,
    houer : ['6 AM' , '7 AM', '8 AM', '9 AM', '10 AM' , '11 AM' , '12 PM', '1 PM', '2 PM', '3 PM', '4 PM' , '5 PM' , '6 PM', '7 PM'],
    getNumCus : function( minimumCustomers , maximumCustomers){
        for(var i=0 ; i<this.houer.length ;i++){
            this.numCus = getRandomNumCust(this.minimumCustomers , this.maximumCustomers);
           // console.log(NumCus);
          
            this.numCooke.push(Math.ceil(this.numCus * this.averageCookies));
            // this.numCooke=Math.ceil(this.numCooke);
           this.totalNumCooki = this.totalNumCooki + this.numCooke[i];
           
           this.totalNumCooki=Math.ceil(this.totalNumCooki);
           console.table(`${this.houer[i]} we have ${this.numCus} customers we should have ${this.numCooke[i]} in this houer `);
          
        }
        console.log(`total  ${this.totalNumCooki}`);
    },

    render : function(){
        
        var container = document.getElementById('show')
        var hed1 = document.createElement('h1');
        container.appendChild(hed1);
        hed1.textContent = this.shopeName;
        console.log(hed1);
        var ul1 = document.createElement('ul');
        hed1.appendChild(ul1);
       
        var tot = document.createElement('p');
        container.appendChild(tot);
        for(var i=0 ; i<this.houer.length ;i++){
            var li1 = document.createElement('li'); 
            li1.textContent = this.houer[i] +' : '+ this.numCooke[i] + ' cookies';
            ul1.appendChild(li1);
        } tot.textContent = 'Total =' + this.totalNumCooki;
       

    
     
} } ;
        
 console.log(tokyoShope.getNumCus());
 console.log(tokyoShope.render());



 var dubaiShope = {
    shopeName : 'Dubai',
    minimumCustomers : 11,
    maximumCustomers : 38,
    averageCookies : 3.7,
    numCus: 0,
    numCooke:[],
    totalNumCooki : 0,
    houer : ['6 AM' , '7 AM', '8 AM', '9 AM', '10 AM' , '11 AM' , '12 PM', '1 PM', '2 PM', '3 PM', '4 PM' , '5 PM' , '6 PM', '7 PM'],
    getNumCus : function( minimumCustomers , maximumCustomers){
        for(var i=0 ; i<this.houer.length ;i++){
            this.numCus = getRandomNumCust(this.minimumCustomers , this.maximumCustomers);
           // console.log(NumCus);
          
           this.numCooke.push(Math.ceil(this.numCus * this.averageCookies));
           
           
           this.totalNumCooki = this.totalNumCooki + this.numCooke[i];
           
           this.totalNumCooki=Math.ceil(this.totalNumCooki);
           console.table(`${this.houer[i]} we have ${this.numCus} customers we should have ${this.numCooke[i]} in this houer `);
          
        }
        console.log(`total  ${this.totalNumCooki}`);
    },

    render : function(){
        
        var container = document.getElementById('show')
        var hed1 = document.createElement('h1');
        container.appendChild(hed1);
        hed1.textContent = this.shopeName;
        console.log(hed1);
        var ul1 = document.createElement('ul');
        hed1.appendChild(ul1); 
        var tot = document.createElement('p');
        container.appendChild(tot);
        for(var i=0 ; i<this.houer.length ;i++){
            var li1 = document.createElement('li');
           
            li1.textContent = this.houer[i] +' : '+ this.numCooke[i] + ' cookies';
            ul1.appendChild(li1);
           
        } tot.textContent = 'Total =' + this.totalNumCooki;
       

    
     
} } ;
        
 console.log(dubaiShope.getNumCus());
 console.log(dubaiShope.render());

 var parisShope = {
    shopeName : 'Paris',
    minimumCustomers : 20,
    maximumCustomers : 38,
    averageCookies : 2.3,
    numCus: 0,
    numCooke:[],
    totalNumCooki : 0,
    houer : ['6 AM' , '7 AM', '8 AM', '9 AM', '10 AM' , '11 AM' , '12 PM', '1 PM', '2 PM', '3 PM', '4 PM' , '5 PM' , '6 PM', '7 PM'],
    getNumCus : function( minimumCustomers , maximumCustomers){
        for(var i=0 ; i<this.houer.length ;i++){
            this.numCus = getRandomNumCust(this.minimumCustomers , this.maximumCustomers);
           // console.log(NumCus);
          
           this.numCooke.push(Math.ceil(this.numCus * this.averageCookies));
           
           this.totalNumCooki = this.totalNumCooki + this.numCooke[i];
           
           this.totalNumCooki=Math.ceil(this.totalNumCooki);
           console.table(`${this.houer[i]} we have ${this.numCus} customers we should have ${this.numCooke[i]} in this houer `);
          
        }
        console.log(`total  ${this.totalNumCooki}`);
    },

    render : function(){
        
        var container = document.getElementById('show')
        var hed1 = document.createElement('h1');
        container.appendChild(hed1);
        hed1.textContent = this.shopeName;
        console.log(hed1);
        var ul1 = document.createElement('ul');
        hed1.appendChild(ul1);
       
        var tot = document.createElement('p');
        container.appendChild(tot);
        for(var i=0 ; i<this.houer.length ;i++){
            var li1 = document.createElement('li');
            
            li1.textContent = this.houer[i] +' : '+ this.numCooke[i] + ' cookies';
            ul1.appendChild(li1);
           
        } tot.textContent = 'Total =' + this.totalNumCooki;
       

    
     
} } ;
        
 console.log(parisShope.getNumCus());
 console.log(parisShope.render());


 


 var limaShope = {
    shopeName : 'Lima',
    minimumCustomers : 2,
    maximumCustomers : 16,
    averageCookies : 4.6,
    numCus: 0,
    numCooke:[],
    totalNumCooki : 0,
    houer : ['6 AM' , '7 AM', '8 AM', '9 AM', '10 AM' , '11 AM' , '12 PM', '1 PM', '2 PM', '3 PM', '4 PM' , '5 PM' , '6 PM', '7 PM'],
    getNumCus : function( minimumCustomers , maximumCustomers){
        for(var i=0 ; i<this.houer.length ;i++){
            this.numCus = getRandomNumCust(this.minimumCustomers , this.maximumCustomers);
           // console.log(NumCus);
          
           this.numCooke.push(Math.ceil(this.numCus * this.averageCookies));
           
           
           this.totalNumCooki = this.totalNumCooki + this.numCooke[i];
           
           this.totalNumCooki=Math.ceil(this.totalNumCooki);
           console.table(`${this.houer[i]} we have ${this.numCus} customers we should have ${this.numCooke[i]} in this houer `);
          
        }
        console.log(`total  ${this.totalNumCooki}`);
    },

    render : function(){
        
        var container = document.getElementById('show')
        var hed1 = document.createElement('h1');
        container.appendChild(hed1);
        hed1.textContent = this.shopeName;
        console.log(hed1);
        var ul1 = document.createElement('ul');
        hed1.appendChild(ul1);
        var li1 = document.createElement('li');
        ul1.appendChild(li1);
        var li2 = document.createElement('li');
        ul1.appendChild(li2);
        var tot = document.createElement('p');
        container.appendChild(tot);
        for(var i=0 ; i<this.houer.length ;i++){
            var li1 = document.createElement('li');
            ul1.appendChild(li1);
            li1.textContent = this.houer[i] +' : '+ this.numCooke[i] + ' cookies';
           
        }
        tot.textContent = 'Total =' + this.totalNumCooki;

    
     
} } ;
        
 console.log(limaShope.getNumCus());
 console.log(limaShope.render());




function getRandomNumCust(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }






// getAge : function(min , max){
//     this.age = getRandomAge(min , max);
//   
// console.table('Number of custemer',Math.floor(Math.random() * 10));
//         console.log(getNumCus());
//         study : function(){
//             console.log('what is this' , this);
//             console.log(`${this.name} is studying ..and his age is ${this.age}`);
//           }
//         };
//         console.log('this age from outside ' , this.age);
//         console.log(student1.study());
//         console.table(student1);
// cookiesPerHour:[],
// setCookiesPerHour: function(){
//         for (var i=0; i<14 ;i++ )
//         {
//           this.cookiesPerHour[i]= Math.floor(this.cusPerHour[i] * this.avr);
//         }
//         console.log(this.cookiesPerHour);
//     },

// getcookenum :function(){
    //     for (var j=0 ; j<14 ; j++){
    //         this.numCooke[j] = this.getNumCus.numCus * this.averageCookies;
    //         this.numCooke[j]=Math.ceil(this.numCooke);
    //     }
    //     console.table(`${this.houer[j]} we have ${this.numCus} customers we should have ${this.numCooke[j]} in this houer `);
    // },