// These test cases are all unfinished. We will finish them together.
describe("tests for ChangeHandler class", function() {

    // tests for insertCoin();
    it("insertCoin() correctly modifies cashTendered", function() {
        // Remember, you can arrange, act, and assert...start small
        let changeHandler = new ChangeHandler();
        expect(changeHandler.insertCoin('penny')).toBe(1);
        expect(changeHandler.insertCoin('pEnNy')).toBe(1);
        expect(changeHandler.insertCoin('nickle')).toBe(5);
        expect(changeHandler.insertCoin('dime')).toBe(10);
        expect(changeHandler.insertCoin('quarter')).toBe(25);
        expect(changeHandler.insertCoin('ducat')).toBe(undefined);
    });

    it("checks isPaymentSufficient() to be set to true/false if you've paid enough to purchase item", function() {
        let changeHandler = new ChangeHandler(100);  // arrange
        changeHandler.cashTendered = 25; // act
        expect(changeHandler.isPaymentSufficient()).toBe(false);// assert
        
        let changeHandler2 = new ChangeHandler(100);  // arrange
        changeHandler2.cashTendered = 100; // act
        expect(changeHandler2.isPaymentSufficient()).toBe(true); // assert
    
        let changeHandler3 = new ChangeHandler(100);  // arrange
        changeHandler3.cashTendered = 125; // act
        expect(changeHandler3.isPaymentSufficient()).toBe(true); // assert
    });

    it("checks howMuchIOweU() to see if it modifies this.amountDue appropriately", function(){
        let changeHandler = new ChangeHandler(100);  // arrange
        changeHandler.cashTendered = 0; // act
        expect(changeHandler.howMuchIOweU()).toBe(100);// assert

        let changeHandler2 = new ChangeHandler(100);  // arrange
        changeHandler2.cashTendered = 25; // act
        expect(changeHandler2.howMuchIOweU()).toBe(75);// assert
        
        let changeHandler3 = new ChangeHandler(100);  // arrange
        changeHandler3.cashTendered = 100; // act
        expect(changeHandler3.howMuchIOweU()).toBe(undefined); // assert
    
        let changeHandler4 = new ChangeHandler(100);  // arrange
        changeHandler4.cashTendered = 125; // act
        expect(changeHandler4.howMuchIOweU()).toBe(undefined); // assert
    });
    it("checks oopsIOverPaid() to see if the proper changeDue is returned if cashTendered>amountDue", function(){
        let changeHandler = new ChangeHandler(100);  // arrange
        changeHandler.cashTendered = 0; // act
        expect(changeHandler.oopsIOverpaid()).toBe(undefined);// assert

        let changeHandler2 = new ChangeHandler(100);
        changeHandler2.cashTendered = 500;
        expect(changeHandler2.oopsIOverpaid()).toBe(400);
    });
    it("checks giveChange() to see if the proper change object is returned.", function(){
        let changeHandler = new ChangeHandler();  // arrange
        changeHandler.changeDue = 0;
        let changeReturn = {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
            } // act
        expect(changeHandler.giveChange()).toEqual(changeReturn) // assert

        let changeHandler2 = new ChangeHandler();  // arrange
        changeHandler2.changeDue = 143; // act
        let changeReturn2 = {
            quarters: 5,
            dimes: 1,
            nickels: 1,
            pennies: 3
            } // act
        expect(changeHandler2.giveChange()).toEqual(changeReturn2)
        // expect(changeHandler2.giveChange()).toEqual(changeReturn2)
    });
    it("checks the debtReset", function(){
        let changeHandler = new ChangeHandler(100);
        expect(changeHandler.debtReset()).toBe(0);
    });
});