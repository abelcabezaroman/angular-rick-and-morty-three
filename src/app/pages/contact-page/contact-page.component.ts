import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  userRegisterForm!: FormGroup;

  // valueChanges$: any;

  isSubmit : boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      role: ["Teacher", [Validators.minLength(5)]],
      age: [25, [Validators.required, Validators.min(18), Validators.max(99)]]
    })
    // this.valueChanges$ = this.userRegisterForm.valueChanges.subscribe(changes => {
    //   console.log(changes);
    // })
    // this.userRegisterForm.statusChanges.subscribe(status => {
    //   console.log(status);
    // })
  }

  submit(){
    this.isSubmit = true;
    console.log(this.userRegisterForm);
    console.log(this.userRegisterForm.value);
  }

  ngOnDestroy() {
    // this.valueChanges$.unsubscribe()
  }
}
