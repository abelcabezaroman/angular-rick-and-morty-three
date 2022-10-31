import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  modalData:any = null;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.getModalSubject().subscribe((modalData: boolean) => {
      this.modalData = modalData;
    });
  }

  closeModal(){
    this.modalData = null;
  }
}
