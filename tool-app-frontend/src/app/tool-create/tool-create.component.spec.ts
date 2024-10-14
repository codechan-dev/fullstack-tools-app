import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCreateComponent } from './tool-create.component';

describe('ToolCreateComponent', () => {
  let component: ToolCreateComponent;
  let fixture: ComponentFixture<ToolCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
