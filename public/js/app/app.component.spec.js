"use strict";
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
describe('App', function () {
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                app_component_1.AppComponent
            ]
        });
    });
    beforeEach(testing_1.inject([app_component_1.AppComponent], function (comp) {
        component = comp;
    }));
    it('should work', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=app.component.spec.js.map