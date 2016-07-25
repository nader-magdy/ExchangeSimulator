// spec.js
describe('Protractor Demo Exchange', function () {


    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.get('http://localhost:3000/');

    });
    it('should have a title', function () {
        var title = browser.getTitle();
        console.log(title);
        expect(title).toEqual('Exchange Simulator');
    });

    // var home_page = require('../Pages/home_page.js')	
    // it('should add one and two', function() {
    // 	home_page.EnterFirstNumber(1);
    // 	home_page.EnterSecondNumber(2);
    // 	home_page.goButton();
    // 	var LatestResult=home_page.latestResult();
    // 	expect(LatestResult).toEqual('3');
    // });
});