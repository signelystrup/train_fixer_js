class Train{

    trainList;

    constructor(){
        this.trainList = new LinkedList();
    }

    addCar(car){
        this.trainList.add(car);
    }

    isValid(){

        if (this.trainList.head.data.type !== "lokomotiv"){
            return false;
        }

        const size = this.trainList.size();

        if (size > 10 && this.trainList.tail.data.type !== "lokomotiv"){
            return false;
        }



        return true;
    }

    sortCars(){

    }

    printTrain(){
        this.trainList.forEach(car => console.log("car: " + car.type + ", " + car.subType));
    }

}






