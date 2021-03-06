import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHistoryItemComponent } from './client-history-item.component';

describe('ClientHistoryItemComponent', () => {
  let component: ClientHistoryItemComponent;
  let fixture: ComponentFixture<ClientHistoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHistoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
