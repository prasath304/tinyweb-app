import { Component } from '@angular/core';
import { UrlFormComponent } from './url-form/url-form.component';
import { UrlListComponent } from './url-list/url-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UrlFormComponent, UrlListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShortLink App';
}