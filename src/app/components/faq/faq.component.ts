import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {


  faqs = [
    {
      question: "How long does the visa process take?",
      answer: "Processing times vary between 3-12 months depending on visa type and individual circumstances.",
      open: false
    },
    {
      question: "What are the success rates?",
      answer: "We maintain a 98% success rate through careful preparation and expert guidance.",
      open: false
    },
    {
      question: "What are the English language requirements?",
      answer: "Most visa applications require an IELTS score of at least 6.0, but it varies based on the institution and course.",
      open: false
    },
    {
      question: "Can I work while studying in Australia?",
      answer: "Yes, student visa holders can work up to 48 hours per fortnight during their studies and unlimited hours during breaks.",
      open: false
    },
    {
      question: "What are the tuition fees in Australia?",
      answer: "Tuition fees vary by university and course, typically ranging from AUD 20,000 to AUD 50,000 per year.",
      open: false
    }
  ];
  



  ngAfterViewInit(): void {
    this.initFaqAnimations();
  }


  private initFaqAnimations() {
    gsap.from('.faq-item', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.faq-container',
        start: 'top 70%'
      }
    });
  
    document.querySelectorAll('.faq-question').forEach((question, index) => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling as HTMLElement;
        const isOpen = this.faqs[index].open;
        
        gsap.to(answer, {
          height: isOpen ? 0 : 'auto',
          opacity: isOpen ? 0 : 1,
          duration: 1,
          ease: 'power2.inOut'
        });
        
        this.faqs[index].open = !isOpen;
      });
    });
  }
  
}
