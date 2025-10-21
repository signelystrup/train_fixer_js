class Train{

    trainList;

    constructor(){
        this.trainList = new LinkedList();
    }

    addCar(car){
        this.trainList.add(car);
    }

    isValid(){
        //size === 0
        if (this.trainList.isEmpty()){
            return true; //?? it's not NOT valid.
        }

        //size === 1
        if(this.trainList.size() === 1 && this.trainList.head.data === lokomotiv){ //must be a locomotive
            return true;
        }

        if (!this.isLocomotivesValid()){ //locomotives.
            return false;
        }
        
        if (!this.isGodvogneValid()){
            return false;
        }

        if (!this.isSengevogneValid()){
            return false;
        }

        return true;
    }

    isLocomotivesValid(){
        const size = this.trainList.size();

        if (size === 1 && this.trainList.head.data === lokomotiv){
            return true;
        }

        if (this.trainList.head.data !== lokomotiv){ //the first car must always be a locomotive.
            console.log("invalid train: the first car must always be a locomotive.")
            return false;
        }

        //if there are more than 10 cars, the last car must be a locomotive.
        if (size <= 10 && this.trainList.tail.data === lokomotiv){
            return false;
        }else if (size > 10 && this.trainList.tail.data !== lokomotiv){
            return false;
        }

        //check for locomotives in the middle of the train.
        let current = this.trainList.head.next;
        while(current !== this.trainList.tail){
            if (current.data === lokomotiv ){
                return false;
            }

            current = current.next;
        }

        return true;
    }

    isGodvogneValid(){
        let current = this.trainList.head.next;

        while(current !== this.trainList.tail){

            //no passenger cars after godsvogne:
            if (current.data === godsvogn &&
                current.next.data.type === "passagervogn") {
                return false;
            }
            
            current = current.next;
        }

        return true;
    }

    isSengevogneValid(){
        //DER ER 4 valide MULIGHEDER:
        //1. ingen sengevogne
        //2. kun sengevogne
        //3. sengevogne først
        //4. sengevogne sidst.

        //passagervognene kan være kombinationer af:
        //(sengevogne) & (sidde + spisevogne) || (sidde + spisevogne) & (sengevogne)

        let current = this.trainList.head.next; //skip locomotive
        let sengevogneEncountered = false;

        while(current !== null && current.data === sengevogn ){ //skip sengevogne
            sengevogneEncountered = true;
            current = current.next;
        }
        while(current !== null && current.data !== sengevogn ){ //skip sidde- og spisevogne
            current = current.next;
        }
        while(current !== null && current.data === sengevogn ){ //skip sengevogne (igen)
            current = current.next;
            if (sengevogneEncountered){
                return false;
            }
        }

        //if there are 'spisevogne' or 'siddevogne' after two blocs of 'sengevogne', train is not valid.
        if (current !== null && (current.data === spisevogn || current.data === siddevogn) ){
            return false;
        }

        return true;
    }


    sortCars(){
        let sortedList = new LinkedList();

        let firstLocomotive = lokomotiv;
        let passengerCars = new LinkedList();
        let godsvogne = new LinkedList();

        let current = this.trainList.head;

        //adskil gods- og passagervogne. 
        while (current !== null){
            if (current.data.type === "passagervogn"){
                passengerCars.add(current.data);
            }else if (current.data.type === "godsvogn"){
                godsvogne.add (current.data);
            }

            current = current.next;
        }

        //sort passengers
        passengerCars = this.sortPassengers(passengerCars);

        //merge
        sortedList.add(firstLocomotive);
        sortedList = LinkedList.concat(sortedList, passengerCars);
        sortedList = LinkedList.concat(sortedList, godsvogne);

        //add lokomotiv if train is longer than 10.
        if (this.trainList.size() > 10){
            sortedList.add(lokomotiv);
        }

        return sortedList;
    }

    sortPassengers(list){

        let sengevogne = new LinkedList();
        let siddeSpisevogne = new LinkedList();

        //adskil
        let current = list.head;
        
        while(current !== null){
            if (current.data === sengevogn){
                sengevogne.add(current.data);
            }else{
                siddeSpisevogne.add(current.data);
            }
            current = current.next;
        }

        //merge
        return list.head.data === sengevogn ? //saml passagervogne (i rækkefølge efter første vogn i input-listen)
            LinkedList.concat(sengevogne, siddeSpisevogne) : 
            LinkedList.concat(siddeSpisevogne, sengevogne);
            
    }

    printTrain(){
        if (this.trainList.isEmpty()){
            console.log("train is empty");
        }else {
            console.log("Is train valid? " + this.isValid() );
        }

        this.trainList.forEach(car => console.log("car: " + car.type + ", " + car.subType));
    }

/*
    insertionSortRange(arr, low, high) {
        for (let i = low + 1; i <= high; i++) { //range = low+1 to high

            let key = arr[i]; //number. starting at second lowest index, increase by one.

            let j = i - 1;
            while (j >= low && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }//end of for i loop.
    }*/

}






