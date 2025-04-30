class Singleton{
    static instance;

    constructor() {
        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this;    
    }

    getData() {
        return "Singleton data";
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);
console.log(instance1.getData());