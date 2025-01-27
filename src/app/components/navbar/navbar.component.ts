import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    isNavbarVisible = false;
    isSpanWhite = false;
    isSpanVisible = false;

    toggleNavbar() {
        this.isNavbarVisible = !this.isNavbarVisible;
        this.isSpanWhite = !this.isSpanWhite;
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        this.isSpanVisible = event.clientY < 50; // Show span when mouse is within 50px from the top
    }
}
