import { HttpClient } from "@angular/common/http";
import {
	Translation,
	TRANSLOCO_CONFIG,
	TRANSLOCO_LOADER,
	translocoConfig,
	TranslocoLoader,
	TranslocoModule,
} from "@ngneat/transloco";
import { Injectable, isDevMode, NgModule } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class TranslocoHttpLoader implements TranslocoLoader {
	constructor(private http: HttpClient) {}

	public getTranslation(lang: string): Observable<Translation> {
		return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
	}
}

@NgModule({
	exports: [TranslocoModule],
	providers: [
		{
			provide: TRANSLOCO_CONFIG,
			useValue: translocoConfig({
				availableLangs: ["en", "pt"],
				defaultLang: "pt",
				// Remove this option if your application doesn't support changing language in runtime.
				reRenderOnLangChange: true,
				prodMode: !isDevMode(),
			}),
		},
		{ provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
	],
})
export class TranslocoRootModule {}
