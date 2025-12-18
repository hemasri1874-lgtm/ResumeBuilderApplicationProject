import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableResume } from './editable-resume';

describe('EditableResume', () => {
  let component: EditableResume;
  let fixture: ComponentFixture<EditableResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
