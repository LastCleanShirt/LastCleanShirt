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
    'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];
  imageUrl: string = this.images[Math.floor(Math.random() * this.images.length)-1];
  changeImage(): void {

    let newIndex = Math.floor(Math.random() * this.images.length);
    this.imageUrl = this.images[newIndex];
    console.log(newIndex); // TODO: Fix this
  }
}
// Compare this snippet from src/app/components/small/carousel/carousel.component.ts: