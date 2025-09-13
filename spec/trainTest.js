describe("lokomotiver", function(){
    const train = new Train();
    train.addCar(lokomotiv);

    it("skal være den første vogn i toget", function(){
        expect(train.isValid()).toBeTrue();

        //expect(train.trainList.head.data).toBe(lokomotiv);
        //expect(true).toBe(true);
    });

});