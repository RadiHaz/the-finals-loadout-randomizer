import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {IItem, ItemRandomizerService} from "../../services/item-randomizer/item-randomizer.service";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-item-icon',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './item-icon.component.html',
  styleUrl: './item-icon.component.scss'
})
export class ItemIconComponent implements OnInit{

  loadout: IItem[] = [];
  playerForm = new FormGroup({
    playerClass: new FormControl("LIGHT")
  });
  constructor(private itemRandomizerService: ItemRandomizerService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    // this.loadout = this.itemRandomizerService.getRandomLoadout();
  }

  generateLoadout() {
    const playerClass = this.playerForm.get("playerClass")?.value;
    this.loadout = this.itemRandomizerService.getRandomLoadout(playerClass || "LIGHT");
    console.log("player class", playerClass)
  }

}
