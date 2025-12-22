import { Routes } from '@angular/router';
import { TrialOne } from './trial-one/trial-one';
import { TrialTwo } from './trial-two/trial-two';
import { Trial3 } from './trial-3/trial-3';
import { DynamicSection } from './dynamic-section/dynamic-section';
import { DynamicSec2 } from './dynamic-sec2/dynamic-sec2';

export const routes: Routes = [
  { path: '', redirectTo: 'trial-one', pathMatch: 'full' },
  { path: 'trial-one', component: TrialOne },
  { path: 'trial-two', component: TrialTwo },
  { path: 'trial-three', component: Trial3 },
  { path: 'dynamic-section', component: DynamicSection },
  { path: 'dynamic-section2', component: DynamicSec2 },
];
