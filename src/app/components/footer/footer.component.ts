import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  ngAfterViewInit(): void {
    this.initFooterAnimations()
  }

  private initFooterAnimations() {
    gsap.from('.footer-section', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%'
      }
    });
  }
}
