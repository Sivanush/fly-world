import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-pathway',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pathway.component.html',
  styleUrl: './pathway.component.css'
})
export class PathwayComponent {


  pathways = [
    {
      title: 'Skilled Migration',
      description: 'Skilled-based permanent residency',
      points: ['Points-tested system', '189/190/491 visas', 'Medium-term solution'],
      animationDelay: 0.2
    },
    {
      title: 'Employer Sponsorship',
      description: 'Work with approved Australian employers',
      points: ['TSS 482 visa', 'Employer nomination scheme', 'Pathway to PR'],
      animationDelay: 0.4
    },
    {
      title: 'Global Talent Visa',
      description: 'For exceptional individuals in target sectors',
      points: ['Fast-track processing', 'Priority consideration', 'For top-tier talent'],
      animationDelay: 0.6
    }
  ];


  ngAfterViewInit(): void {
    this.initPathwayAnimations()
  }



  private initPathwayAnimations() {
    gsap.from('.pathway-card', {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.pathways-section',
        start: 'top 70%',
      },
      ease: 'power4.out'
    });

    document.querySelectorAll('.pathway-card').forEach(card => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
        paused: true,
        onComplete: () => {
          gsap.to(card.querySelector('.pathway-overlay'), { opacity: 1 })
        }
      });

      card.addEventListener('mouseenter', () => gsap.to(card, { scale: 1.02, overwrite: true }));
      card.addEventListener('mouseleave', () => gsap.to(card, { scale: 1, overwrite: true }));
    });
  }
}
