import { Routes } from '@angular/router';
import { PalindromoComponent } from './components/palindromo/palindromo.component';

export const ROUTES: Routes = [
    { path: 'palindromo', component: PalindromoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'palindromo'},
    { path: '**', pathMatch: 'full', redirectTo: 'palindromo'}
]