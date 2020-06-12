import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { OperationService } from './exchange/operation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './exchange/form.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DirectivaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
