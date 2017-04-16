import {NgModule} from "@angular/core";
import {ScrollEventModule, SCROLL_EVENT_TIME} from "ng2-events/lib/scroll";

@NgModule({
    imports: [ScrollEventModule],
    exports: [ScrollEventModule],
    providers: [
        {provide: SCROLL_EVENT_TIME, useValue: 200}
    ]
})
export class SharedModule {

}
