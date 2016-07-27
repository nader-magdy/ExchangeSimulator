import { TestPage } from '../pages/test.page'

describe("Title test", () => {
    it("title test", () => {
        let testPage = new TestPage();
        expect(testPage.getTitle()).toEqual("Hello");
    });
});