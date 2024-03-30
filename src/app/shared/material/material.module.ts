import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

const MaterialComponents = [

  MatFormFieldModule,
  MatInputModule,
 
  MatPaginatorModule,
 

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
