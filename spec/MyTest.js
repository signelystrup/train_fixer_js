xdescribe("My first suite", function() { //the suite. has a name, and contains a grouping of specs
    it("contains a spec with an expectation", function() { //the first spec.
        expect(true).toBe(true);
    });

    it("contains a failing spec", () => {
        fail("haha loser");
    });
});


describe("A spec can", function() {
    let a;

    it("access variables in the suite", function() {
        a = true;

        expect(a).toBe(true);
    });
});

//expect().toBe() or expect().not.toBe():
describe("The 'toBe' matcher compares with ===", function() {
    it("and has a positive case", function() {
        expect(true).toBe(true);
    });

    it("and can have a negative case", function() {
        expect(false).not.toBe(true);
    });
});

describe("blip blop", ()=>{
    let foo = 3;
    beforeEach(function () {
        foo += 1;
    });
    afterEach(function () {
        foo = 0;
    });
    beforeAll(function () {
        foo = 1;
    });
    afterAll(function () {
        foo = 0;
    });

    xit("foo is 2", ()=>{ //strange. i thought this would be 4.
        expect(foo).toBe(2);
    });

    xit("foo is 1", ()=>{
        expect(foo).toBe(1);
    });
});

//idk if i really get this one.
describe("A spec", function() {
    beforeEach(function() {
        this.foo = 0;
    });

    it("can use the `this` to share state", function() { //with the 'this' key word, you can't use arrow functions.
        expect(this.foo).toEqual(0);
        this.bar = "test pollution?";
    });

    it("prevents test pollution by having an empty `this` " +
        "created for the next spec", function() {
        expect(this.foo).toEqual(0);
        expect(this.bar).toBe(undefined);
    });
});

//nested describe calls:
describe("A spec", function() {
    let foo;

    beforeEach(function() {
        foo = 0;
        foo += 1;
    });

    afterEach(function() {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function() {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function() {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });

    //nested
    describe("nested inside a second describe", function() {
        let bar;

        beforeEach(function() {
            bar = 1;
        });

        it("can reference both scopes as needed", function() {
            expect(foo).toEqual(bar);
        });
    });

});

describe("Pending specs", function() {
    xit("can be declared 'xit'", function () {
        expect(true).toBe(false);
    });

    it("can be declared with 'it' but without a function");

    it("can be declared by calling 'pending' in the spec body", function () {
        expect(true).toBe(false);
        pending('this is why it is pending');
    });
});



//xdescribe excludes the suite when we run our tests.
//fdescribe excludes all suites, without fdescribe.

/*
Jasmine matchers:
https://jasmine.github.io/api/edge/matchers.html

(or you can write a custom matcher: https://jasmine.github.io/tutorials/custom_matchers)

 */