var newEnrollmentPage=function(){
	this.Loginbtn=function(){
		element(by.css('#main > section.HomeHero-section > header > div > nav > ul > li:nth-child(1) > a')).click();
	};
	this.Sign_Up_btn=function(){
		element(by.css('#main > section.HomeHero-section > header > div > nav > ul > li:nth-child(2) > a')).click();
	};
	this.HeroSliderText=function(){
		return element(by.id('#hero-slider > div > div > div > div > h1')).getText();
	};
	this.latestResult=function(){
		return element(by.binding('latest')).getText();
	};
    this.header=function(){
		return element(by.css('h1.page-header')).getText();
	};
    

};
module.exports = new newEnrollmentPage();