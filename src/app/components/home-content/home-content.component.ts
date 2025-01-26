import { Component } from '@angular/core';
import { CarouselComponent } from '../small/carousel/carousel.component';

@Component({
  selector: 'home-content',
  imports: [CarouselComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {

}
