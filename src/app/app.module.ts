import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { TarjetaCreditoComponent } from './components/tarjetas/tarjeta-credito/tarjeta-credito.component';
import { TarjetaCreditoListComponent } from './components/tarjetas/tarjeta-credito-list/tarjeta-credito-list.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    TarjetaCreditoComponent,
    TarjetaCreditoListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
