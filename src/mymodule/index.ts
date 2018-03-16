import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { MyComponent } from './mycomponent';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [MyComponent],
    exports: [MyComponent],
    providers: []
})
export class MyModule {
}
