class Train{

    trainList;

    constructor(){
        this.trainList = new LinkedList();
    }

    addCar(car){
        this.trainList.add(car);
    }

    isValid(){

    }

    sortCars(){

    }

    printTrain(){
        console.log("print train");
        this.trainList.forEach(car => console.log("car: " + car.type +
                                                   car.subType != null ?
                                                   ", " + car.subType  : " ")
                              );
    }

}






