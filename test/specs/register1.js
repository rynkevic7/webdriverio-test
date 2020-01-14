const assert = require('assert');
const {expect} = require('chai');
const email = '0.24984543258656222one@one.com';
const firstName = "John";
const lastName = "Smith";
const password = "123456";


describe('register page', () => {

    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Progress Monitor')
    });

    it('should have a correct title', () => {
        const actualH1Text = $('h1').getText()
        const expectedH1Text = 'User Register'
        expect(actualH1Text).equal(expectedH1Text)
    });

    it('should have a correct description', () => {
        const actual = $('p').getText()
        const expected = 'Profiles with fictitious or dummy data will be deleted.'
        expect(actual).eq(expected)
    });

    it('should have a correct description', () => {
        const actual = $('form button').getText()
        const expected = 'Submit'
        expect(actual).eq(expected)
    });

    it('should fill first name field', () => {
        const element = $('form input[name="firstName"]')
        element.setValue(firstName)
    });

    it('should fill last name field', () => {
        const element = $('form input[name="lastName"]')
        element.setValue(lastName)
    });

    it('should fill cell phone field', () => {
        const element = $('form input[name="phone"]')
        element.setValue('17777777777')
    });

    it('should fill email field', () => {
        const element = $('form input[name="email"]')
        element.setValue(email)
    });

    it('should fill password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]')
        element.setValue('aklsjdbvlskjvb lasjdhlaksjdfl ljshdljqsdhfladjfbv')
    });

    it('should fill up my goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('eat sleep code repeat');

    });

    it('should choose English knowledge skills', () => {
        const selectBox = $('form select[name="englishLevel"]')
        selectBox.selectByVisibleText("Native")
    });

    it('should click submit button', () => {
        const element = $('form button[type="submit"]')
        element.click()
    });

    it('should fill email field', () => {
        browser.newWindow('https://stage.pasv.us/user/login');
        const element = $('form input[name="email"]');
        element.setValue(email)
    });

    it('should fill password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
    });

    it('should click login button', () => {
        const element = $('form button[type="submit"]');
        element.click();
    });

    it('should have a correct title', () => {
        const actual = $('h1.mb-3').getText();
        const expected = firstName +" "+ lastName;
        expect(actual).equal(expected);
        browser.pause(9000)
    });



})