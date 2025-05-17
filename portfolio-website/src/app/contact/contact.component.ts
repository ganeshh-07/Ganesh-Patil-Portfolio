import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ParticlesComponent } from '../particles/particles.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, ParticlesComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = this.contactForm.value;
    this.http.post('https://ganesh-patil-portfolio.onrender.com/api/contact', formData).subscribe({
      next: (response: any) => {
        this.successMessage = response.message || 'Message sent successfully!';
        this.errorMessage = null;
        this.contactForm.reset();
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Failed to send message. Please try again.';
        this.successMessage = null;
      },
    });
  }
}