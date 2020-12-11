class Food{
    constructor(){
     this.foodstock;
    }
    getFood(){
        this.foodstock = database.ref('food');
        this.foodstock.on("value",function(data){
            food = data.val();
        })
    } 
    deductFood(x){

        if(x<=0 ){
            x = 0;
        }
        else{
            x = x-1;
        }
        database.ref('/').update({
            food : x
        });  
    }
    
    display(){
        
    }
}