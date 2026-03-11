import { Component } from '@angular/core';
import { UrlFormComponent } from './url-form/url-form.component';
import { UrlListComponent } from './url-list/url-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UrlModel } from './Model/Url.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UrlFormComponent, UrlListComponent,CommonModule,FormsModule,


  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShortLink App';
   longUrl: string = '';
  shortUrls: { link: string }[] = [];

  urlList: UrlModel[] = [];

  receiveUrls(urls: UrlModel[]) {
    this.urlList = urls;
  }
 
}