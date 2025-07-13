import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { MainComponent } from '../main/main.component';
import { RouterModule } from '@angular/router';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent, MainComponent],
        imports: [RouterModule.forRoot([
            { path: '', component: MainComponent },
            { path: '**', component: NotFoundComponent }
        ])]
    });
    
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NotFoundComponent', () => {
    expect(component).toBeTruthy();
  });
});
