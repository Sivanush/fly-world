import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {



  stats = [
    { value: 25000, label: 'Successful Applications' },
    { value: 150, label: 'Countries Served' },
    { value: 300, label: 'Expert Consultants' },
    { value: 98, label: 'Success Rate (%)' }
  ];

  ngAfterViewInit(): void {
    this.initCounterAnimations()
    
  }

  private initCounterAnimations() {
    document.querySelectorAll('.counter-value').forEach((counter) => {
      const target = +counter.textContent!;
      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        ease: 'power4.out',
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%'
        }
      });
    });
  }




  private initParticleNetwork() {
    for(let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle absolute w-1 h-1 bg-[#78DAB8] rounded-full';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      document.querySelector('.particle-network')!.appendChild(particle);
      
      gsap.to(particle, {
        x: 'random(-50,50)',
        y: 'random(-50,50)',
        duration: 'random(3,5)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }
  }


  
}
