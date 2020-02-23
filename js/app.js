'use strict';
var seattleShope = {
    shopeName : 'Seattle',
    minimumCustomers : 32,
    maximumCustomers : 65,
    averageCookies : 6.3,
    numCus: 0,
    numCooke:0,
    totalNumCooki : 0,
    houer : ['6 AM' , '7 AM', '8 AM', '9 AM', '10 AM' , '11 AM' , '12 PM', '1 PM', '2 PM', '3 PM', '4 PM' , '5 PM' , '6 PM', '7 PM'],
    getNumCus : function( minimumCustomers , maximumCustomers){
        for(var i=0 ; i<seattleShope.houer.length ;i++){
            seattleShope.numCus = getRandomNumCust(minimumCustomers , maximumCustomers);
           // console.log(NumCus);
           seattleShope.numCooke = seattleShope.numCus * seattleShope.averageCookies;
           seattleShope.totalNumCooki = this.totalNumCooki + this.numCooke;
           this.numCooke=Math.ceil(this.numCooke);
           this.totalNumCooki=Math.ceil(this.totalNumCooki);
           console.table(`${seattleShope.houer[i]} we have ${seattleShope.numCus} customers we should have ${seattleShope.numCooke} in this houer `);
          
        }
        console.log(`total  ${seattleShope.totalNumCooki}`);
    },

    render : function(){
        
        var container = document.getElementById('show')
        var hed1 = document.createElement('h1');
        container.appendChild(hed1);
        hed1.textContent = seattleShope.shopeName;
        console.log(hed1);
        var ul1 = document.createElement('ul');
        hed1.appendChild(ul1);
        var li1 = document.createElement('li');
        ul1.appendChild(li1);
        var li2 = document.createElement('li');
        ul1.appendChild(li2);
        for(var i=0 ; i<seattleShope.houer.length ;i++){
            var li1 = document.createElement('li');
            ul1.appendChild(li1);
            li1.textContent = seattleShope.houer[i] +' : '+ seattleShope.numCooke;
           
        }
       

        //console.log(ul1);
        //console.log(li1);
}
    //     var articleEl = document.createElement('article');
    //     console.log(articleEl);
    //     container.appendChild(header);
    //     console.log(header);
    //     header.textContent = Seattle.name;

    // }
     
};
//console.log(Seattle.render());
 console.log(seattleShope.getNumCus(32 ,65));
 console.log(seattleShope.render());


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