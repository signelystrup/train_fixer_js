class Train{

    trainList;

    constructor(){
        this.trainList = new LinkedList();
    }

    addCar(car){
        this.trainList.add(car);
    }

    isValid(){

        if (this.trainList.isEmpty()){
            return true; //?? it's not NOT valid.
        }

        const size = this.trainList.size();



        //LOKOMOTIV
        if (this.trainList.head.data !== lokomotiv){ //the first car must always be a locomotive.
            return false;
        }

        if(size === 1){ //from here, the train should be longer than 1.
            return true;
        }

        if (size <= 10 && this.trainList.tail.data === lokomotiv){
            return false;
        }

        if (size > 10 && this.trainList.tail.data !== lokomotiv){ //if there are more than 10 cars, the last car must be a locomotive.
            return false;
        }

        let current = this.trainList.head.next;
        let firstSengevognSectionEnded = false;

        while(current !== this.trainList.tail){

            //check for locomotives in the middle of the train.
            if (current.data === lokomotiv ){
                return false;
            }

            //no passenger cars after godsvogne:
            if (current.data === godsvogn &&
                current.next.data.type === "passagervogn") {
                return false;
            }

            //sengevogne must be connected:
            if (current.data === sengevogn &&
                current.next.data !== sengevogn){
                if (firstSengevognSectionEnded){ //starting second bloc with sengevogne.
                    return false;
                }

                firstSengevognSectionEnded = true;
            }

            current = current.next;
        } //end of while lokomotiv-logik.

        //SENGEVOGNE
        current = this.trainList.head.next;
        if (current.data !== sengevogn) { //if the first passenger car is a sengevogn, skip.
            while (current !== null &&
            current.data.type === "passagervogn") {

                //if there are sidde- or spisevogne after a sengevogn:
                if (current.data === sengevogn &&
                    current.next.data === siddevogn ||
                    current.next.data === spisevogn ) {

                    return false;
                }

                current = current.next;

            }//end of while
        }//end of if (current !== sengevogn)

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

        //this.trainList.forEach(car => console.log("car: " + car.type + ", " + car.subType));
    }

}






