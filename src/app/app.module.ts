import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './utils/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailPageComponent } from './hero-detail/hero-detail-page.component';

@NgModule({
  declarations: [ButtonComponent, AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroDetailPageComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  entryComponents: [ButtonComponent],
  bootstrap : [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
  }

  ngDoBootstrap() {}
}
