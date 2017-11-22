import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPplUpdateComponent } from './famous-ppl-update.component';

describe('FamousPplUpdateComponent', () => {
  let component: FamousPplUpdateComponent;
  let fixture: ComponentFixture<FamousPplUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamousPplUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPplUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
