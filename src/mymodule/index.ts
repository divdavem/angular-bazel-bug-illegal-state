import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { MyComponent } from './mycomponent';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [MyComponent],
    exports: [MyComponent],
    providers: []
})
export class MyModule {
}
