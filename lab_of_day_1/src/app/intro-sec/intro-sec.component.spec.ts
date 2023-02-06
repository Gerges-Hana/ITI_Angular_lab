import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSecComponent } from './intro-sec.component';

describe('IntroSecComponent', () => {
  let component: IntroSecComponent;
  let fixture: ComponentFixture<IntroSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
