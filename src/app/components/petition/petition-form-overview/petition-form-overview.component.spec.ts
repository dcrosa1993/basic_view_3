import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionFormOverviewComponent } from './petition-form-overview.component';

describe('PetitionFormOverviewComponent', () => {
  let component: PetitionFormOverviewComponent;
  let fixture: ComponentFixture<PetitionFormOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionFormOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionFormOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
