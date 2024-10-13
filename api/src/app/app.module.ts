import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalConfigComponent } from './dashboard/modal-config/modal-config.component';
import { ModalGraphicComponent } from './components/graphic/modal-graphic/modal-graphic.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ModalConfigComponent,
    ModalGraphicComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
