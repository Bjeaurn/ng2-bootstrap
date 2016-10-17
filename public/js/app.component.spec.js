"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
describe('App', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                app_component_1.AppComponent
            ]
        });
    });
    it('should work', testing_1.inject([app_component_1.AppComponent], function (app) {
        // Add real test here
        expect(2).toBe(2);
    }));
});
//# sourceMappingURL=app.component.spec.js.map