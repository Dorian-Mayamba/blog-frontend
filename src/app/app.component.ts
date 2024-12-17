import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header/>
    <app-home/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'blog';
}
