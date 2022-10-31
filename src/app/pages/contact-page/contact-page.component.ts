import { Subject } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  dameMas = new Subject();


  userRegisterForm!: FormGroup;

  // valueChanges$: any;

  isSubmit : boolean = false;
  constructor(private formBuilder: FormBuilder, private modalService: ModalService) { }



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


    this.dameMas.subscribe((nuevoDato) => {
      console.log(nuevoDato);
    });
    this.dameMas.subscribe((nuevoDato) => {
      console.log(nuevoDato);
    });
    this.dameMas.subscribe((nuevoDato) => {
      console.log(nuevoDato);
    });
    this.dameMas.subscribe((nuevoDato) => {
      console.log(nuevoDato);
    });
  }

  enviarNuevoDato(){
    this.dameMas.next("Hola")
  }

  abrirModal(){
    this.modalService.nextModalSubject({title: "Soy una modal", description: "Pues mira tio es que mira como mola la modal"})
  }

  abrirOtraModal(){
    this.modalService.nextModalSubject({title: "Holaaaa", description: "Mira que guay mi modaaaal"})
  styleUrls: ['./contact-page.component.scss']
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
