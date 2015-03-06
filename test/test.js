var assert = require("assert"),
    Browser = require("zombie"),
    focusNode = require("../src/index");


describe("focusNode(node : Node)", function() {
    before(function(done) {
        var _this = this;

        Browser.visit("http://localhost", function(e, browser) {
            _this.document = browser.window.document;
            done();
        });
    });

    it("should focus element without throwing an error in ie", function() {
        var a = this.document.createElement("input");

        this.document.body.appendChild(a);

        focusNode(a);

        assert.equal(this.document.activeElement, a);
    });
});
