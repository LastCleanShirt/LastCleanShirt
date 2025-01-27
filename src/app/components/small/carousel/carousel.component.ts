import { Component } from '@angular/core';

@Component({
  selector: 'image-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
  images = [
    'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];
  currentIndex: number = 0;
  imageUrl: string = this.images[this.currentIndex];

  changeImage(): void {
    if (this.currentIndex === 2) this.currentIndex = 0;
    else this.currentIndex += 1;
    this.imageUrl = this.images[this.currentIndex];
    console.log(this.currentIndex);
  }
}