import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessagesService } from 'src/app/core/services/messages.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit, OnDestroy {
  public isSubmitting = false;
  public formContactMe: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private toastService: ToastService
  ) {
    this.formContactMe = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public async submitContactMe() {
    if (this.formContactMe.invalid) {
      console.log(this.formContactMe.errors);
      return;
    }

    try {
      this.formContactMe.disable;
      this.isSubmitting = true;
      const response = await this.messagesService.addMessage(
        this.formContactMe.value
      );

      this.toastService.showToastMessage(response.message);
      this.formContactMe.reset();
    } catch (error) {
      console.log(error);
      this.toastService.showToastMessage(error as string);
    } finally {
      this.isSubmitting = false;
      this.formContactMe.enable;
    }
  }

  public errorHandling(control: string, error: string) {
    return this.formContactMe.controls[control].hasError(error);
  }
}
