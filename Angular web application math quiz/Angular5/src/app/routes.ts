import { AuthGuard } from './auth/auth.guard';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DifficultyComponent } from './difficulty/difficulty.component';
import { EasyquizComponent } from './easyquiz/easyquiz.component';
import { RegularquizComponent } from './regularquiz/regularquiz.component';
import { HardquizComponent } from './hardquiz/hardquiz.component';
import { EasyresultComponent } from './easyresult/easyresult.component';
import { RegularresultComponent } from './regularresult/regularresult.component';
import { HardresultComponent } from './hardresult/hardresult.component';
import { from } from 'rxjs';

export const appRoutes : Routes =[
    { path:'register', component:RegisterComponent },
    { path:'difficulty', component:DifficultyComponent, canActivate :  [AuthGuard]},
    { path:'easyquiz', component:EasyquizComponent, canActivate :  [AuthGuard] },
    { path:'regularquiz', component:RegularquizComponent, canActivate :  [AuthGuard] },
    { path:'hardquiz', component:HardquizComponent, canActivate :  [AuthGuard] },
    { path:'easyresult', component:EasyresultComponent, canActivate :  [AuthGuard] },
    { path:'regularresult', component:RegularresultComponent, canActivate :  [AuthGuard] },
    { path:'hardresult', component:HardresultComponent, canActivate :  [AuthGuard] },
    { path:'', redirectTo:'/register', pathMatch:'full' }
];