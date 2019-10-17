import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAuthHtppInterceptorServiceComponent } from './basic-auth-htpp-interceptor-service.component';

describe('BasicAuthHtppInterceptorServiceComponent', () => {
  let component: BasicAuthHtppInterceptorServiceComponent;
  let fixture: ComponentFixture<BasicAuthHtppInterceptorServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAuthHtppInterceptorServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAuthHtppInterceptorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
