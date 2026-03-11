import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlModel } from '../Model/Url.model';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-url-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './url-form.component.html',
  styleUrl: './url-form.component.scss',
})
export class UrlFormComponent {
  longUrl = '';
  isPrivate = false;
  @Output() urlsEvent = new EventEmitter<UrlModel[]>();
  shortUrls: UrlModel[] = [];

  constructor(private urlService: UrlService) { }


  generateShortUrl() {
    if (this.longUrl.trim()) {
      const shortLink = `https://tinyurl.com/${this.longUrl}`;
      var url: UrlModel = { shortCode: shortLink, isPrivate: this.isPrivate, clickCount: 0, originalUrl: this.longUrl, createdAt: new Date().toISOString(), id: 0 }
      this.urlService.saveUrl(url).subscribe({
        next: (saved: UrlModel[]) => {
          this.urlsEvent.emit(saved);
          // this.toastr.success('Data saved successfully!', 'Success');

        },
        error: (err) => {console.error('save failed:', err)
          // this.toastr.error('Something went wrong!', 'Error');

        }
      });

      this.isPrivate = false;
      this.longUrl = '';
      this.longUrl = '';
    }
  }
}
