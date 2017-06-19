import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { DataDemoComponent } from './data-demo/data-demo.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { UtilsService } from "./utils.service";
import { DataFilterComponent } from './data-demo/data-filter/data-filter.component'

const appRoutes: Routes = [
  { path: "", component: ResumeComponent },
  { path: "resume", component: ResumeComponent },
  { path: "datademo", component: DataDemoComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    ResumeComponent,
    ProductPageComponent,
    DataDemoComponent,
    DataFilterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJMh6PwvXJgQfbY00t0NpjZ6VOGmgmZq0'
    })
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
