import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {OrderInfos} from "../../../types/order.types";

@Component({
  selector: 'app-order-step2',
  templateUrl: './order-step2.component.html',
  styleUrls: ['./order-step2.component.scss']
})
export class OrderStep2Component implements OnInit {

  @ViewChild('firstname') firstname: ElementRef | undefined
  @ViewChild('lastname') lastname: ElementRef | undefined
  @ViewChild('street') street: ElementRef | undefined
  @ViewChild('zip') zip: ElementRef | undefined
  @ViewChild('city') city: ElementRef | undefined
  @ViewChild('number') number: ElementRef | undefined

  @Output('next') next = new EventEmitter<void>();

  public errors: { el: ElementRef, error: string}[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  placeOrder() {
    if (this.validateFields()) {
      this.orderService.setOrderInfos(this.createOrderInfos())
      this.next.emit();
    }
  }

  private createOrderInfos(): OrderInfos {
    const firstname: HTMLInputElement = this.firstname?.nativeElement!
    const lastname: HTMLInputElement = this.lastname?.nativeElement!
    const street: HTMLInputElement = this.street?.nativeElement!
    const zip: HTMLInputElement = this.zip?.nativeElement!
    const city: HTMLInputElement = this.city?.nativeElement!
    const number: HTMLInputElement = this.number?.nativeElement!
    return {
      firstname: firstname.value,
      lastname: lastname.value,
      streetNumber: street.value,
      zip: +zip.value,
      city: city.value,
      phone: number.value
    }
  }

  private validateFields(): boolean {
    this.resetErrors();
    this.validateNotEmptyFields();
    this.validatePhoneNumber();
    this.validateZip()
    if (this.errors.length === 0) {
      return true
    } {
      this.showErorrs()
      return false;
    }
  }

  private resetErrors() {
    this.errors = [];
    this.removeErrorFromField(this.firstname!)
    this.removeErrorFromField(this.lastname!)
    this.removeErrorFromField(this.street!)
    this.removeErrorFromField(this.zip!)
    this.removeErrorFromField(this.city!)
    this.removeErrorFromField(this.number!)
  }

  private removeErrorFromField(el: ElementRef) {
    const element: HTMLInputElement = el.nativeElement;
    if (element.classList.contains('error')) {
      element.classList.remove('error')
    }
  }

  private showErorrs() {
    this.errors.forEach(error => {
      const element: HTMLInputElement = error.el.nativeElement!;
      element.classList.add('error')
    })
  }

  private validatePhoneNumber() {
    if (!this.isValidNumber(this.number!)) {
      this.errors.push({ el: this.number!, error: 'Number is invalid'})
    }
  }

  private validateZip() {
    if (!this.isValidZip(this.zip!)) {
      this.errors.push({ el: this.zip!, error: 'ZIP is invalid'})

    }
  }

  private validateNotEmptyFields() {
    if (this.isEmpty(this.firstname!)) {
      this.errors.push({el: this.firstname!, error: 'Firstname cannot be empty'})
    }
    if (this.isEmpty(this.lastname!)) {
      this.errors.push({el: this.lastname!, error: 'Lastname cannot be empty'})
    }
    if (this.isEmpty(this.street!)) {
      this.errors.push({el: this.street!, error: 'Street cannot be empty'})
    }
    if (this.isEmpty(this.zip!)) {
      this.errors.push({el: this.zip!, error: 'ZIP cannot be empty'})
    }
    if (this.isEmpty(this.city!)) {
      this.errors.push({el: this.city!, error: 'City cannot be empty'})
    }
    if (this.isEmpty(this.number!)) {
      this.errors.push({el: this.number!, error: 'Number cannot be empty'})
    }
  }

  private isEmpty(element: ElementRef): boolean {
    const el: HTMLInputElement = element.nativeElement;
    return el.value === ''
  }

  private isValidNumber(element: ElementRef): boolean {
    const el: HTMLInputElement = element.nativeElement;
    const number = el.value.replace(/ /g, '')
    return /^\+41?[0-9]{9}$/.test(number)
  }

  private isValidZip(element: ElementRef): boolean {
    const el: HTMLInputElement = element.nativeElement;
    return /^\d{4}$/.test(el.value)
  }
}
