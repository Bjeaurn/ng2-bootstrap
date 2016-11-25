import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {

    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

    let component: ComponentFixture<AppComponent>;

    beforeEach(async(() => {

        return TestBed
            .configureTestingModule({
                declarations: [AppComponent]
            })
            .overrideComponent(AppComponent, {
                set: {
                    template: "<div>foo</div>"
                }
            })
            .compileComponents()
            .then(() => {
                component = TestBed.createComponent(AppComponent);
            });
    }));

    it("should work", () => {
        expect(component).not.toBeUndefined();
    });
})