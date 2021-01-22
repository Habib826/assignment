


// kilometer to meter
function kilometerToMeter(meter) {
 
    if(meter<0){
     meter  = "Give a valid number";
     }
 
     else{
         // 1 kilometer = 1000 meter
      meter = meter * 1000;
         
     }
     return meter;
     
 }
 



//  budget calculaor

function budgetClaculator(mobile,laptop,watch){
    if(mobile<0|| laptop<0|| watch<0){
        totalPrice="price is not valid";
    }

    else if(mobile>0 && laptop==0 && watch==0){
        // 1 mobile price=100$
         mobilePrice= mobile*100;
         totalPrice=mobilePrice;
        }

    else if(mobile>0 && laptop>0 && watch==0){
         mobilePrice= mobile*100;
        //  1 laptop price= 500$
         laptopPrice=laptop*500;
         totalPrice=laptopPrice+mobilePrice;
    }

    else{
         mobilePrice=mobile*100;
         laptopPrice=laptop*500;
        //  1 watch price=50$
         watchPrice= watch*50;
         totalPrice=laptopPrice+mobilePrice+watchPrice;
        

    }
    return totalPrice;
}




// hotel days cost

function hotelCost(days){
    if (days<0){
        var cost= "Days can't be nagative";   
    }

    else if(days<=10){
        // cost of each days for first 10 days is 100.
        cost=days*100;
    }

    else if(days<=20){
        var firstTenDays=10*100;
        var remain=days-10;
        // cost of each next 11-20 days is 80.
        var nextTenDays= remain*80;
        cost = nextTenDays+firstTenDays;
        
    }
    

    else{
        var firstTenDays=10*100;
        var nextTenDays=10*80;
        var remain = days-20;
        // after 20 days it will cost 50.
        var nextDaysCost= remain*50;
        cost= firstTenDays+nextTenDays+nextDaysCost;
    }
    
    return cost;

}




//  find the largest name

var friendsName = ["habib", "kim", "jimjimjim","jimjimjimn", "java", "kamal", "mohammod", "summmon", "abul"];
function megaFriends(){
    var largestName= friendsName[0];
    for(var i=0; i < friendsName.length; i++ ){
        var element=friendsName[i];
        if(element.length>largestName.length){
            largestName=element;
        }

    }
    return largestName;
}




