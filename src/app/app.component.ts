import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemIconComponent} from "./components/item-icon/item-icon.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemIconComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-finals-loadout-randomizer';
}
