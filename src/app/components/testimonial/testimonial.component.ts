import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {


  testimonials = [
    {
      quote: "The entire process was seamless with VisaPro. From initial consultation to visa grant, their team was professional and responsive.",
      name: "Sarah Johnson",
      initials: "SJ",
      location: "Melbourne, VIC"
    },
    {
      quote: "We couldn't have navigated the complex visa requirements without their expertise. Highly recommended!",
      name: "Michael Chen",
      initials: "MC",
      location: "Sydney, NSW"
    },
    {
      quote: "Outstanding service! They helped us secure our permanent residency in record time.",
      name: "Priya Patel",
      initials: "PP",
      location: "Brisbane, QLD"
    }
  ];

  ngAfterViewInit(): void {
    this.testimonialAnimations()
  }


  private testimonialAnimations(){
    const testimonialsTrack = document.querySelector('.testimonials-track');
    if (testimonialsTrack) {
      const scrollWidth = testimonialsTrack.scrollWidth;
      const containerWidth = window.innerWidth;
      const maxScroll = -(scrollWidth - containerWidth);

      gsap.to('.testimonials-track', {
        x: maxScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: '.testimonials-container',
          start: 'top center',
          end: `+=${Math.abs(maxScroll) * 1.5}`, 
          pin: true, 
          scrub: 1,
          invalidateOnRefresh: true, 
          onUpdate: (self) => {
            const currentX = gsap.getProperty('.testimonials-track', 'x') as number;
            if (currentX < maxScroll) {
              gsap.set('.testimonials-track', { x: maxScroll });
            }
          }
        }
      });
    }
  }
}
