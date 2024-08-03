import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroupComponent } from './form-group/form-group.component';
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
      CardComponent,
      InputComponent,
      FormGroupComponent,
      ButtonComponent,
    ],
    imports: [
      CommonModule, 
      ReactiveFormsModule, 
      NgxMaskDirective
    ],
    exports: [
      CardComponent, 
      InputComponent,
      FormGroupComponent,
      ButtonComponent
    ],
    providers: [provideNgxMask()]
  })
export class SharedModule {}