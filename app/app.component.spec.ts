import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {

    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

    let component: any;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });

        TestBed.compileComponents();

        component = TestBed.createComponent(AppComponent);
    });

    it("should work", () => {
      expect(component).toBeTruthy();
      expect(1).toBe(1);
    });
});