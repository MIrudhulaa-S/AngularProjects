import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOpsComponent } from './sub-ops.component';

describe('SubOpsComponent', () => {
  let component: SubOpsComponent;
  let fixture: ComponentFixture<SubOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
