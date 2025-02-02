import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {



  ngAfterViewInit(): void {
    this.initWhyUsAnimations()
    
  }

  private initWhyUsAnimations() {
    gsap.from('.why-us-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.why-us-container',
        start: 'top 70%'
      }
    });
  }
}
