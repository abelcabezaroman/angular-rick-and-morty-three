import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  dameMas = new Subject();
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
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
  }
}
