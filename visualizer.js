const trainContainer = document.querySelector("#train-container");

function drawTrain(train){
    const trainCard = document.createElement("div");
    trainContainer.append(trainCard);

    trainCard.classList.add("train");

    train.trainList.forEach(car => trainCard.append(drawCar(car)) );
}

function drawCar(car){
    const carCard = document.createElement("span");

    carCard.classList.add("car");
    carCard.classList.add(car.type);
    carCard.classList.add(car.subType);

    if(car.subType == null) {
        carCard.innerText = car.type;
    }else{
        carCard.innerText = car.subType;
    }


    return carCard;
}

