import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlModel } from '../Model/Url.model';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-url-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './url-list.component.html',
  styleUrl: './url-list.component.scss',
})
export class UrlListComponent implements OnInit {
  searchTerm = '';
  loading=false;
   @Input() urls: UrlModel[] = [];

  constructor(private urlService: UrlService) {
    this.filteredUrls();
  }
  ngOnInit(): void {
    this.loading=true;
   this.urlService.getUrls().subscribe({
      next: (data) => {
        this.urls = data??[]; 
        this.loading=false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.loading=false;
      }
    });

  }

  copyUrl(link: UrlModel) {
     navigator.clipboard.writeText(link.originalUrl).then(() => {
      link.clickCount++;
    });

  }

  deleteUrl(url: UrlModel) {
    this.urlService.DeleteUrlById(url.id).subscribe({
      next: () => {this.urls = this.urls.filter(u => u.id !== url.id)

      },
      error: (err) => {console.error('Delete failed:', err)
      }
    });

  }
  filteredUrls() {
    return this.urls.filter(url =>
      url.originalUrl.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
