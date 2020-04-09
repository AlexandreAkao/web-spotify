import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSelectedComponent } from './playlist-selected.component';

describe('PlaylistSelectedComponent', () => {
  let component: PlaylistSelectedComponent;
  let fixture: ComponentFixture<PlaylistSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
