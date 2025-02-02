import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAustraliaComponent } from './why-australia.component';

describe('WhyAustraliaComponent', () => {
  let component: WhyAustraliaComponent;
  let fixture: ComponentFixture<WhyAustraliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyAustraliaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyAustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
