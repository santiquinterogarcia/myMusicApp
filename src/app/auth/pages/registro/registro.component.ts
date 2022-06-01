import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent {
  miFormulario: FormGroup = this.fb.group({
    name: ['santi', [Validators.required]],
    email: ['sa@sa.sa', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  registro() {
    console.log(this.miFormulario.value);
    this.router.navigate(['/auth/login']);
  }
}
