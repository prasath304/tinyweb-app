import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './url-form.component.html',
  styleUrl: './url-form.component.scss',
})
export class UrlFormComponent {
 url = '';
  isPrivate = false;

  constructor() {}

  submitUrl() {
    // this.http.post('/api/shorten', { url: this.url, private: this.isPrivate })
    //   .subscribe(res => {
    //     console.log('Short link created:', res);
    //     alert('Short link generated successfully!');
    //   });
  }
}
