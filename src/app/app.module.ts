import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TranslocoRootModule } from "./transloco-root.module";
import { HttpClientModule } from "@angular/common/http";
import { TRANSLOCO_CONFIG } from "@ngneat/transloco";
import { enviroment } from "./enviroments/enviroment";
import { SharedModule } from "./shared/shared.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		TranslocoRootModule,
		SharedModule,
	],
	providers: [
		{
			provide: TRANSLOCO_CONFIG,
			useValue: {
				reRenderOnLangChange: true,
				availableLangs: ["en", "pt"],
				prodMode: enviroment.production,
				defaultLang: "pt",
			},
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
