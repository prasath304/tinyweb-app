import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';
import { routes } from './app/app.routes';

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideHttpClient(),
      provideServerRendering()
    ]
  }, context); // <-- context passed here
}
