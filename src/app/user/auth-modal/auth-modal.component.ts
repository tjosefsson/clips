import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy  {
  private modalId: string = 'auth';

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.modal.register(this.modalId);
  }

  ngOnDestroy(): void {
    this.modal.unregister(this.modalId)
  }

}
