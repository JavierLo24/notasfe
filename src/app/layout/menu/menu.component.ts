import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuitemComponent } from '../menuitem/menuitem.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuitemComponent, ButtonModule],
  template: `
    <ul class="layout-menu">
      <ng-container *ngFor="let item of model; let i = index;">
          <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
          <li *ngIf="item.separator" class="menu-separator"></li>
      </ng-container>

      <li class="mt-8 ">
        <p-button label="Salir" icon="pi pi-power-off" iconPos="right" [styleClass]="'w-full'">
        </p-button>
      </li>

    </ul>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit{
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {
    this.model = [
      {
        label: 'Navegación',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['./dashboard'] },
          { label: 'Cursos', icon: 'pi pi-fw pi-slack', routerLink: ['./courses'] },
          { label: 'Estudiantes', icon: 'pi pi-fw pi-users', routerLink: ['./students'] },
          { label: 'Asignaciones', icon: 'pi pi-fw pi-calendar', routerLink: ['./assignments'] },
          { label: 'Calificaciones', icon: 'pi pi-fw pi-map', routerLink: ['./grades'] },
          { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['./profile'] },
          { label: 'Configuración', icon: 'pi pi-fw pi-cog', routerLink: ['./settings'] },
        ],
      }
    ];
  }
}
