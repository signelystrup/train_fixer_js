class LinkedList {
    head;
    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }


    add(data) {
        let newNode = {data: data, next: null};

        if (this.head == null){ // list is empty
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    remove(data) {

    }

    size() {

    }

    get(index) {

    }

    forEach(callBack){

        let current = this.head;

        while (current != null){

            callBack(current.data);
            current = current.next; //go to next index
        }
    }

    isEmpty(){
        if (this.head == null){
            return true;
        }else{
            return false;
        }
    }



}