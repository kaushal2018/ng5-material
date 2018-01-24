import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWithPromisesComponent } from './http-with-promises.component';

describe('HttpWithPromisesComponent', () => {
  let component: HttpWithPromisesComponent;
  let fixture: ComponentFixture<HttpWithPromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpWithPromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpWithPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
