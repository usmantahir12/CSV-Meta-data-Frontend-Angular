import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncommentsComponent } from './buttoncomments.component';

describe('ButtoncommentsComponent', () => {
  let component: ButtoncommentsComponent;
  let fixture: ComponentFixture<ButtoncommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtoncommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtoncommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
