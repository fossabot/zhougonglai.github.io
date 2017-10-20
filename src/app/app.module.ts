import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    routedComponents
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, CoreModule, SharedModule,
    AppRoutingModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
