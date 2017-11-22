import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPplDescriptionComponent } from './famous-ppl-description.component';

describe('FamousPplDescriptionComponent', () => {
  let component: FamousPplDescriptionComponent;
  let fixture: ComponentFixture<FamousPplDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamousPplDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPplDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
