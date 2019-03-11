import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ModalCreateUserComponent } from './components/modal-create-user/modal-create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ModalCreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      tapToDismiss: true,
      maxOpened: 1
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalCreateUserComponent,
  ]
})
export class AppModule { }
