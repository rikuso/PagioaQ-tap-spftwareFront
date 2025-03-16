import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactoForm: FormGroup;
  enviando = false;
  mensajeExito = false;
  mensajeError = false;
  constructor(private fb: FormBuilder,private apiservices : ApiService) {
    this.contactoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celphone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  enviarFormulario() {
    if (this.contactoForm.valid) {
      this.enviando = true;
      this.mensajeExito = false;
      this.mensajeError = false;

      this.apiservices.enviarFormularioContacto(this.contactoForm.value)
        .subscribe({
          next: (respuesta) => {
            this.enviando = false;
            this.mensajeExito = true;
            this.contactoForm.reset();
          },
          error: (error) => {
            this.enviando = false;
            this.mensajeError = true;
            console.error('Error al enviar formulario:', error);
          }
        });
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.contactoForm.controls).forEach(campo => {
        const control = this.contactoForm.get(campo);
        control?.markAsTouched();
      });
    }
  }
}
