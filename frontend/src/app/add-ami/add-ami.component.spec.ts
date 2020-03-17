import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmiComponent } from './add-ami.component';

describe('AddAmiComponent', () => {
  let component: AddAmiComponent;
  let fixture: ComponentFixture<AddAmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
