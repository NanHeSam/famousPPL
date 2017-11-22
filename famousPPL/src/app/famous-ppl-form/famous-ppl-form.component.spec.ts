import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPplFormComponent } from './famous-ppl-form.component';

describe('FamousPplFormComponent', () => {
  let component: FamousPplFormComponent;
  let fixture: ComponentFixture<FamousPplFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamousPplFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPplFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
