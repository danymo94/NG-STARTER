import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {}

  showSuccess(detail: string): void {
    this.messageService.add({ severity: 'success', 'Succes', detail });
  }

  showError(detail: string): void {
    this.messageService.add({ severity: 'error', 'Error', detail });
  }
}
