import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule}  from '@angular/common/http';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductsubcategoryComponent } from './productsubcategory/productsubcategory.component';
import { SampleComponent } from './sample/sample.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductcategoryComponent,
    ProductsubcategoryComponent,
    SampleComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
