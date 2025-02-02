import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {


  processSteps = [
    { title: 'Skill Assessment', description: 'Get your qualifications recognized by Australian authorities' },
    { title: 'EOI Submission', description: 'Submit Expression of Interest through SkillSelect' },
    { title: 'Visa Application', description: 'Formal application submission with all documents' },
    { title: 'Approval', description: 'Receive your visa grant notification' }
  ];


  ngAfterViewInit(): void {
    this.initProcessAnimations()
  }

  initProcessAnimations(){
    
    gsap.from('.process-step', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.process-timeline',
        start: 'top 70%'
      }
    });
  }
}
