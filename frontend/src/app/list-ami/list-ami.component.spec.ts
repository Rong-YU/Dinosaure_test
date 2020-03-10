import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmiComponent } from './list-ami.component';

describe('ListAmiComponent', () => {
  let component: ListAmiComponent;
  let fixture: ComponentFixture<ListAmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
