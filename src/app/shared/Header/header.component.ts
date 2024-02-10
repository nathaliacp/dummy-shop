import { Component } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	public selectedLang = "pt";

	constructor(private _translocoService: TranslocoService) {}

	public onChangeLanguage(): void {
		this._translocoService.setActiveLang(this.selectedLang);
	}
}
