import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiviOpsComponent } from './divi-ops.component';

describe('DiviOpsComponent', () => {
  let component: DiviOpsComponent;
  let fixture: ComponentFixture<DiviOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiviOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiviOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
