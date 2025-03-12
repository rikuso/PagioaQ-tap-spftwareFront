import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {contactoForm: FormGroup;
  enviando = false;
  mensajeExito = false;
  mensajeError = false;

  constructor(private fb: FormBuilder, private ApiService: ApiService) {
    this.contactoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celphone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Asegura 10 dígitos
      message: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      this.enviando = true;
      this.mensajeExito = false;
      this.mensajeError = false;

      this.ApiService.enviarFormularioContacto(this.contactoForm.value).subscribe({
        next: () => {
          this.enviando = false;
          this.mensajeExito = true;
          this.contactoForm.reset();
        },
        error: (error: any) => {
          this.enviando = false;
          this.mensajeError = true;
          console.error('Error al enviar formulario:', error);
        }
      });
    } else {
      this.contactoForm.markAllAsTouched();
    }
  }
}