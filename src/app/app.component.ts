import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { Content2Component } from "./components/content-2/content-2.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeContentComponent, Content2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lastcleanshirt';
}
