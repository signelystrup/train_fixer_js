describe("der skal", function() {
    let train;

    beforeEach(function (){
        train = new Train();
        train.addCar(lokomotiv);
        train.addCar(godsvogn);
        train.addCar(godsvogn);
        train.addCar(godsvogn);
    });

    describe("være et lokomotiv", function () {
        xit("med mindre toget er tomt", function(){
            train = new Train();
            expect(train.isValid()).toBeTrue();
        });

        it("først i toget", function () {
            expect(train.isValid()).toBeTrue();
        });

        it("forrest OG bagerst, hvis toget er længere end 10 vogne langt", function () {
            train.addCar(godsvogn);
            train.addCar(godsvogn);
            train.addCar(godsvogn);
            train.addCar(godsvogn);
            train.addCar(godsvogn);
            train.addCar(godsvogn);
            train.addCar(lokomotiv);

            expect(train.isValid()).toBeTrue();
        });
    });

    describe ("ikke være et lokomotiv", function(){
        it("i midten af toget", function(){
            train.trainList.set(3, lokomotiv);

            expect(train.isValid()).toBeFalse();

        });

        it("bagerst, hvis toget er 10 vogne eller kortere", function(){
            train.addCar(lokomotiv);

            expect(train.isValid()).toBeFalse();
        });
    });
});

describe("togets længde kan være", function(){
    let train;

    beforeEach(function(){
        train = new Train();
    })

    it("0", function(){
        expect(train.isValid()).toBeTrue();
    })

    it("1", function(){
        train.addCar(lokomotiv);

        expect(train.isValid()).toBeTrue();
    })

    it("100", function(){
        train.addCar(lokomotiv);

        for (let i = 0; i < 98; i++){
            train.addCar(godsvogn);
        }
        train.addCar(lokomotiv);

        expect(train.isValid()).toBeTrue();
    });
});

describe("godsvogne", function(){
    let train;

    beforeEach(function(){
        train = new Train();
        train.addCar(lokomotiv);
        train.addCar(spisevogn);
        train.addCar(spisevogn);
        train.addCar(spisevogn);
        train.addCar(spisevogn);
    });


    it("skal være bagerst i toget", function(){
        train.addCar(godsvogn);
        expect(train.isValid()).toBeTrue();

        train.addCar(godsvogn);
        train.addCar(godsvogn);
        expect(train.isValid()).toBeTrue();
    });

    it("må ikke være mellem passagervogne", function(){
        train.trainList.set(3, godsvogn);
        expect(train.isValid()).toBeFalse();
    });

    it("er ikke et krav for, at toget er validt", function(){
        expect(train.isValid()).toBeTrue();
    });
});

describe("sengevogne", function(){
    let train;

    beforeEach(function(){
        train = new Train();
        train.addCar(lokomotiv);
        train.addCar(spisevogn);
        train.addCar(spisevogn);
        train.addCar(spisevogn);
        train.addCar(spisevogn);
        train.addCar(sengevogn);
        train.addCar(sengevogn);
        train.addCar(sengevogn);
        train.addCar(sengevogn);
        train.addCar(sengevogn);
        train.addCar(lokomotiv);

    });

    it("skal være direkte forbundet", function(){
        expect(train.isValid()).toBeTrue();

        train.trainList.set(3, sengevogn);
        expect(train.isValid()).toBeFalse();
    });

    it("må ikke skulle krydses, for at komme fra en siddevogn til en spisevogn", function(){
        expect(train.isValid()).toBeTrue();

        train.trainList.set(9, siddevogn);
        expect(train.isValid()).toBeFalse();

    });
});


