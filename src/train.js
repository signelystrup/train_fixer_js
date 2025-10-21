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

        /*
        let firstSengevognSectionEnded = false;
        let current = this.trainList.head.next;

        
        while(current !== this.trainList.tail){
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
        if (current.data !== sengevogn || //if the first passenger car is a sengevogn, skip.
            !this.trainList.contains(siddevogn)) { //if there are no siddevogne, skip.

            while (current !== null &&
            current.data.type === "passagervogn") {

                //if there are sidde- or spisevogne after a sengevogn:
                if (current.data === sengevogn &&
                    (current.next.data === siddevogn||
                     current.next.data === spisevogn) ) {

                    return false;
                }

                current = current.next;
            }//end of while
        }//end of if (current !== sengevogn)
*/
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
        //DER ER 5 valide MULIGHEDER:
        //1. ingen sengevogne
        //2. kun sengevogne
        //3. sengevogne først
        //4. sengevogne sidst.
        //5. sengevogne først og sidst.

        //passagervognene kan være alle kombinationer af:
        //(sengevogne) + (sidde + spisevogne) + (sengevogne)


        let current = this.trainList.head.next; //skip locomotive

        while(current.data === sengevogn ){ //first possible 'sengevogne'-section.
            current = current.next;
        }
        while(current.data !== sengevogn && current !== null){ //'siddevogne' and 'spisevogne' must be grouped.
            current = current.next;
        }
        while(current.data === sengevogn ){ //last possible 'sengevogne'-section
            current = current.next;
        }

        //if there are 'spisevogne' or 'siddevogne' after two blocs of 'sengevogne', train is not valid.
        if (current.data === spisevogn || current.data === siddevogn){
            return false;
        }

        return true;
    }


    sortCars(){

        let current = this.trainList.head.next;
        let size = 1;

        let sengevognFirst = current.next.data === sengevogn; //if second car === sengevogn.
        let hasSpisevogn = false;

        while(current != null){

           if(current.data.type === "passagervogn"){
               if(current.data === spisevogn){
                   hasSpisevogn = true;
               }

               //sort passenger car.
               

           }else{
               //sort godsvogn.

           }

           //lokomotiver

            current = current.next;
        }

    }

    printTrain(){
        if (this.trainList.isEmpty()){
            console.log("train is empty");
        }else {
            console.log("Is train valid? " + this.isValid() );
        }

        //this.trainList.forEach(car => console.log("car: " + car.type + ", " + car.subType));
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






