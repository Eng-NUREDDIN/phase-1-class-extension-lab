// Your code here
class Polygon {
    constructor(listOfSides){
        this.listOfSides=listOfSides;
    }
    get countSides (){
        return this.listOfSides.length;
    }
    get perimeter (){
        let sum=0;
       this.listOfSides.forEach(element => {
            sum += element;
        });
        return sum;
    }
    
}
class Triangle  extends Polygon{

    constructor (...args){
        super(...args);        
    }
    get isValid(){
        if(this.listOfSides.length === 3){
            let isValidTriangle = true;
            this.listOfSides.forEach((element, index) => {
                let sumOfSides = 0;
                for(let i=0; i < this.listOfSides.length;i++){
                    if(i != index){
                        sumOfSides += this.listOfSides[i];
                    }                    
                }   
                if (!(sumOfSides > this.listOfSides[index])){
                    isValidTriangle = false;                                      
                }  
            });
            return isValidTriangle;        
        }
        return true;
    }
    
   
    
}

class Square extends Polygon{
    constructor (...args){
        super(...args)        
    }
    get isValid(){
        let isValidSquare=true;
        if(this.listOfSides.length === 4){
            let sideValue=this.listOfSides[0];
            this.listOfSides.forEach(element => {
                if(element != sideValue){
                    isValidSquare= false;                                     
                }
            });  
            return isValidSquare;
        }
        return isValidSquare;
    }
    get area(){
        return Math.pow(this.listOfSides[0], 2);
    }
}