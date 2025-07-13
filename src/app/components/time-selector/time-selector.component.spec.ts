import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeSelectorComponent } from 'src/app/components/time-selector/time-selector.component';

// Import the necessary Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TimeSelectorComponent', () => {
    let component: TimeSelectorComponent;
    let fixture: ComponentFixture<TimeSelectorComponent>;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TimeSelectorComponent],
            imports: [
                MatFormFieldModule,
                MatSelectModule,
                NoopAnimationsModule // Use NoopAnimationsModule for testing without animations
            ]
        })
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(TimeSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create TimeSelectorComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should have timeOptions defined', () => {
        expect(component.timeOptions).toEqual(['4h', '1d', '3d', '1w']);
    });

    it('should have default selectedInterval as "4h"', () => {
        expect(component.selectedInterval).toBe('4h');
    });

    it('should set selectedInterval to "1d" when setSelectedInterval is called with "1d"', () => {
        component.setSelectedInterval('1d');
        expect(component.selectedInterval).toBe('1d');
    });

    it('should emit selectedIntervalChanged on setSelectedInterval', () => {
        spyOn(component.selectedIntervalChanged, 'emit');
        const interval = '1d';
        component.setSelectedInterval(interval);
        expect(component.selectedInterval).toBe(interval);
        expect(component.selectedIntervalChanged.emit).toHaveBeenCalledWith(interval);
    });
})