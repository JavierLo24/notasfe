import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layout-footer">
        <img src="assets/layout/images/logo.png" alt="Logo" height="20" class="mr-2"/>
        <span class="font-medium ml-2">Instituto Técnico Nacional de Comercio</span>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(public layoutService: LayoutService) { }
}
