class Train{

    trainList;

    constructor(){
        this.trainList = new LinkedList();
    }

    addCar(car){
        this.trainList.add(car);
    }

    isValid(){

        if (this.trainList.isEmpty){
            return true; //? it's not NOT valid.
        }

        const size = this.trainList.size();

        //LOKOMOTIV
        if (this.trainList.head.data !== lokomotiv){ //the first car must always be a locomotive.
            return false;
        }

        if (size <= 10 && this.trainList.tail.data === lokomotiv){
            return false;
        }

        if (size > 10 && this.trainList.tail.data !== lokomotiv){ //if there are more than 10 cars, the last car must be a locomotive.
            return false;
        }

        let i = 0;
        //check for locomotives in the middle of the train.
        this.trainList.forEach(car => {
            if (car === lokomotiv &&
                i !== 0 &&
                i !== size-1){

                return false;
            }

            i++;
        });

        //PASSAGERVOGNE

        //SIDDEVOGNE
        //SENGEVOGNE
        //SPISEVOGNE



        //GODSVOGNE


        return true;
    }

    sortCars(){

    }

    printTrain(){
        if (this.trainList.isEmpty()){
            console.log("train is empty");
        }else {
            console.log("Is train valid? " + this.isValid() );
        }

        this.trainList.forEach(car => console.log("car: " + car.type + ", " + car.subType));
    }

}






