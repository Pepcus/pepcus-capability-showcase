import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordEncryptionComponent } from './password-encryption/password-encryption.component';
import {FormsModule} from "@angular/forms";
import {EncryptionService} from "./encryption.service";
import {HttpClientModule} from "@angular/common/http";
import { FileEncryptionComponent } from './file-encryption/file-encryption.component';


@NgModule({
  declarations: [
    AppComponent,
    PasswordEncryptionComponent,
    FileEncryptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
