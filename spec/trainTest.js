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
})