import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './url-list.component.html',
  styleUrl: './url-list.component.scss',
})
export class UrlListComponent {
 //links: any[] = [];
 links = [
  { id: 1, shortUrl: 'http://sho.rt/abc', clicks: 12 },
  { id: 2, shortUrl: 'http://sho.rt/xyz', clicks: 5 }
];

  searchTerm = '';
urlLink: any;

  constructor() {
    this.loadLinks();
  }

  loadLinks() {
   // this.http.get<any[]>('/api/links').subscribe(data => this.links = data);
  }

  filteredLinks() {
   // return this.links.filter(l => l.shortUrl.includes(this.searchTerm));
   return this.links;
  }

  copyToClipboard(url: string) {
    navigator.clipboard.writeText(url);
    alert('Copied: ' + url);
  }

  deleteUrl(id: number) {
    // this.http.delete(`/api/links/${id}`).subscribe(() => {
    //   this.links = this.links.filter(l => l.id !== id);
    // });
  }
}
