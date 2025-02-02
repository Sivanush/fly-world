import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-why-australia',
  standalone: true,
  imports: [],
  templateUrl: './why-australia.component.html',
  styleUrl: './why-australia.component.css'
})
export class WhyAustraliaComponent {
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.feature-card').forEach((card: any, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        rotationX: -20,
        rotationY: 10,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    gsap.utils.toArray('.floating-icon').forEach((icon: any) => {
      gsap.to(icon, {
        y: gsap.utils.random(-15, 15),
        rotation: gsap.utils.random(-5, 5),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    document.addEventListener('mousemove', (e) => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to('.feature-card', {
        x: xPos,
        y: yPos,
        rotationX: yPos * 0.5,
        rotationY: xPos * 0.5,
        duration: 1.5,
        ease: 'power2.out'
      });

    })
  }
}