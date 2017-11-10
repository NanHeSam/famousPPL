import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPplListComponent } from './famous-ppl-list.component';

describe('FamousPplListComponent', () => {
  let component: FamousPplListComponent;
  let fixture: ComponentFixture<FamousPplListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamousPplListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPplListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
