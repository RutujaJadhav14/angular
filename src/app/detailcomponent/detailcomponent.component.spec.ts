import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcomponentComponent } from './detailcomponent.component';

describe('DetailcomponentComponent', () => {
  let component: DetailcomponentComponent;
  let fixture: ComponentFixture<DetailcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
