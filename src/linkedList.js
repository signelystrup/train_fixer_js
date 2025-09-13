class LinkedList {
    head;
    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }


    add(data) {
        let newNode = {data: data, next: null};

        if (this.head === null){ // list is empty
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    remove(data) {
        if (data === null){
            return false;
        }

        //if list empty:
        if (this.head === null){
            return false;
        }

        //if target is first element in list:
        if (this.head.data === data){
            this.head = this.head.next;

            return true;
        }


        let current = this.head.next;
        let previous = this.head;

        while (current !== null) {
            if (current.data === data) {
                previous.next = current.next;
                return true;

            }

            //next index:
            previous = current;
            current = current.next;

        }//end of while loop.
    }

    size() {
        let current = this.head;
        let counter = 0;

        while (current !== null){
            counter ++;
            current = current.next;
        }

        return counter;
    }

    get(index) {
        let current = this.head;
        let counter = 0;

        while(current !== null){

            if(counter === index){
                return current.data;
            }

            current = current.next;
            counter ++;
        }

        return null;
    }

    set(index, data){
        let current = this.head;
        let counter = 0;

        while(current !== null){

            if(counter === index){
                current.data = data;
                return true;
            }

            current = current.next;
            counter ++;
        }

        return false;
    }

    contains(data){
        let current = this.head;

        while (current !== null){
            if (current.data === data){
                return true;
            }

            current = current.next;
        }

        return false;

    }

    //indexOf(data){}

    forEach(callBack){

        let current = this.head;

        while (current !== null){

            callBack(current.data);
            current = current.next; //go to next index
        }
    }

    isEmpty(){
        return this.head === null;
    }


    toArray(){
        let array = [];
        let current = this.head;

        while (current !== null){ //pretty simple in js.
            array.push(current.data);
            current = current.next;
        }

        return array;
    }

    hasNext(node){
        return node.next !== null;
    }
}