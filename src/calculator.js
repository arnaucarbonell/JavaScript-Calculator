export class Calculator {
    #actualNumber=null;
    #previousNumber=null;
    #result=null;
    #list=[];
    getDisplay(){
        if(this.#actualNumber===null && this.#previousNumber===null)return 0;
        if(this.#result!==null)return Math.floor(this.#result);
        if(this.#actualNumber===null)return this.#previousNumber;
        return this.#actualNumber;
    }
    enterNumber(number){
        if(this.#result!==null){
            this.#actualNumber=null;
            this.#result=null;
        }
        return this.#actualNumber=this.#actualNumber*10+number;
    }
    next(){
        if(this.#previousNumber)this.#list.push(this.#previousNumber);
        this.#previousNumber=this.#actualNumber;
        this.#actualNumber=null;
    }
    addition(){
        this.#assumeZero();
        if(this.#actualNumber===0){
            this.#result=this.#previousNumber+this.#previousNumber;
        }
        else{
            this.#result=this.#previousNumber+this.#actualNumber;
        }
        this.#getPreviousValues();
    }
    substraction(){
        this.#assumeZero();
        if(this.#actualNumber===0){
            this.#result=this.#previousNumber-this.#previousNumber;
        }
        else{
            this.#result=this.#previousNumber-this.#actualNumber;
        }
        this.#getPreviousValues();
    }
    multiplication(){
        this.#assumeZero();
        if(this.#actualNumber===0){
            this.#result=this.#previousNumber*this.#previousNumber;
        }
        else{
            this.#result=this.#previousNumber*this.#actualNumber;
        }
        this.#getPreviousValues();
    }
    division(){   
        if(this.#actualNumber===0)return this.#result=0;
        if(this.#assumeZero()===0)return 0;
        if(this.#actualNumber===0){
            this.#result=this.#previousNumber/this.#previousNumber;
        }
        else{
            this.#result=this.#previousNumber/this.#actualNumber;
        }
        this.#getPreviousValues();
    }
    clear(){
        if(!this.#actualNumber){
            this.#actualNumber=null;
            this.#previousNumber=null;
            this.#result=null;
            this.#list=[];
          }
          else{
            this.#actualNumber=null;
          }
    }
    #assumeZero(){
        if(!this.#previousNumber && !this.#actualNumber)return 0;
        if(this.#previousNumber===null)this.#previousNumber=0;
        if(this.#actualNumber===null)this.#actualNumber=0;
    }
    #getPreviousValues(){
        this.#actualNumber=this.#result;
        this.#previousNumber=this.#list.pop();
        if(this.#previousNumber===undefined)this.#previousNumber=0;
    }
}
