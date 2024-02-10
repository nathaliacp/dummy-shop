import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { isDevMode } from "@angular/core";
import { TranslocoHttpLoader } from "./transloco-loader";
import { provideTransloco } from "@ngneat/transloco";

platformBrowserDynamic()
	.bootstrapModule(AppModule, {
		providers: [
			provideTransloco({
				config: {
					availableLangs: ["en", "pt"],
					defaultLang: "pt",
					reRenderOnLangChange: true,
					prodMode: !isDevMode(),
				},
				loader: TranslocoHttpLoader,
			}),
		],
	})
	.catch((err) => console.error(err));
