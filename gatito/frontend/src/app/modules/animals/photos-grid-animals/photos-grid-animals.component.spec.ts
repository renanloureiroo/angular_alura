import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosGridAnimalsComponent } from './photos-grid-animals.component';

describe('PhotosGridAnimalsComponent', () => {
  let component: PhotosGridAnimalsComponent;
  let fixture: ComponentFixture<PhotosGridAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosGridAnimalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosGridAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
