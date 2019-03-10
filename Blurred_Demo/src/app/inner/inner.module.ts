import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerRoutingModule } from './inner-routing.module';
import { ComponentComponent } from './component/component.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { InnerMostCompComponent } from './inner-most-comp/inner-most-comp.component';
import { StepperStatusNotifierDirective } from './stepper-status-notifier.directive';
import { AnimatedFlyoutComponent } from './animated-flyout/animated-flyout.component';
import { MatSelectModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { FormsModule} from '@angular/forms';
import { CaptureDataService } from './capture-data.service';

@NgModule({
  imports: [
    CommonModule,
    InnerRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    FormsModule
    ],
  declarations: [ComponentComponent, MainContentComponent, PopUpComponent, InnerMostCompComponent, StepperStatusNotifierDirective, AnimatedFlyoutComponent],
  providers : [CaptureDataService]
})
export class InnerModule { }
