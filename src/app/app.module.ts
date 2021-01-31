//Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { PalindromoComponent } from './components/palindromo/palindromo.component';

//Routes
import { ROUTES } from './app.routes';
import { BooleanPipe } from './pipes/boolean.pipe'


@NgModule({
  declarations: [
    AppComponent,
    PalindromoComponent,
    BooleanPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
