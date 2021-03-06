import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgeMindmapComponent } from './ledge-mindmap.component';

describe('LedgeMindmapComponent', () => {
  let component: LedgeMindmapComponent;
  let fixture: ComponentFixture<LedgeMindmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgeMindmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgeMindmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
