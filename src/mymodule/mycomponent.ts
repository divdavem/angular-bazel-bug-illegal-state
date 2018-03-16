import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'my-component',
  template: `<form [formGroup]="checkboxGroupForm">
  <div class="btn-group btn-group-toggle">
    <label class="btn-primary">
      <input type="checkbox" formControlName="left"> Left (pre-checked)
    </label>
    <label class="btn-primary">
      <input type="checkbox" formControlName="middle"> Middle
    </label>
    <label class="btn-primary">
      <input type="checkbox" formControlName="right"> Right
    </label>
  </div>
</form>
<hr>
<pre>{{checkboxGroupForm.value | json}}</pre>`
})
export class MyComponent {
  public checkboxGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }
}
