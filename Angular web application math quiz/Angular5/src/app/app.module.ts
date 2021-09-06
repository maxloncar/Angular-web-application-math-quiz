import { AuthGuard } from './auth/auth.guard';
import { QuizService } from './shared/quiz.service';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EasyquizComponent } from './easyquiz/easyquiz.component';
import { RegularquizComponent } from './regularquiz/regularquiz.component';
import { HardquizComponent } from './hardquiz/hardquiz.component';
import { EasyresultComponent } from './easyresult/easyresult.component';
import { RegularresultComponent } from './regularresult/regularresult.component';
import { HardresultComponent } from './hardresult/hardresult.component';
import { DifficultyComponent } from './difficulty/difficulty.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    EasyquizComponent,
    RegularquizComponent,
    HardquizComponent,
    EasyresultComponent,
    RegularresultComponent,
    HardresultComponent,
    DifficultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
