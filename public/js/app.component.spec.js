"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
var app_component_1 = require("./app.component");
describe("AppComponent", function () {
    testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        });
        testing_1.TestBed.compileComponents();
        component = testing_1.TestBed.createComponent(app_component_1.AppComponent);
    });
    it("should work", function () {
        expect(component).toBeTruthy();
        expect(1).toBe(1);
    });
});
//# sourceMappingURL=app.component.spec.js.map