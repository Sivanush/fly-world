import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { HeroComponent } from "./components/hero/hero.component";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrackerComponent } from "./components/tracker/tracker.component";
import { PathwayComponent } from "./components/pathway/pathway.component";
import { ProcessComponent } from "./components/process/process.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { WhyChooseUsComponent } from "./components/why-choose-us/why-choose-us.component";
import { FaqComponent } from "./components/faq/faq.component";
import { FooterComponent } from "./components/footer/footer.component";
import { WhyAustraliaComponent } from "./components/why-australia/why-australia.component";
import { HeaderComponent } from "./components/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroComponent, TrackerComponent, PathwayComponent, ProcessComponent, TestimonialComponent, WhyChooseUsComponent, FaqComponent, FooterComponent, WhyAustraliaComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }


  ngAfterViewInit() {

    gsap.from('tbody tr', {
      opacity: 0,
      x: -50,
      stagger: 0.1,
      scrollTrigger: {
        trigger: 'table',
        start: 'top 80%'
      }
    });

    gsap.from('.lg\\:hidden [class*="space-y-4"] a, .lg\\:hidden button', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.3,
      ease: 'power2.out'
    });

  }





  @HostListener('window:resize')
  onWindowResize() {
    ScrollTrigger.refresh();
  }

}