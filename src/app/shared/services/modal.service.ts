import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalSubject = new Subject<any>();
  constructor() { }

  getModalSubject(){
    return this.modalSubject;
  }

  nextModalSubject(modalData: any){
    this.modalSubject.next(modalData)
  }

}
