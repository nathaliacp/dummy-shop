import { NgModule } from "@angular/core";
import { HeaderComponent } from "./Header/header.component";
import { FormsModule } from "@angular/forms";
import { TranslocoModule } from "@ngneat/transloco";

@NgModule({
	declarations: [HeaderComponent],
	imports: [FormsModule, TranslocoModule],
	exports: [HeaderComponent],
})
export class SharedModule {}
