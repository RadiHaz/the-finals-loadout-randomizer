import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {IItem, ItemRandomizerService} from "../../services/item-randomizer/item-randomizer.service";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup
} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-item-icon',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatButton
  ],
  templateUrl: './item-icon.component.html',
  styleUrl: './item-icon.component.scss'
})
export class ItemIconComponent implements OnInit {

  loadout: IItem[] = [];
  // reserveLoadout: IItem[] = [];
  playerForm = new FormGroup({
    playerClass: new FormControl("LIGHT"),
    selectedItems: new FormArray([
      new FormControl(true),
      new FormControl(true),
      new FormControl(true),
      new FormControl(true),
      new FormControl(true),
    ])
  });

  constructor(private itemRandomizerService: ItemRandomizerService) {
  }

  ngOnInit() {
    this.generateLoadout();
  }

  randomizeClass() {
    this.playerForm.get("playerClass")?.setValue(this.itemRandomizerService.getRandomClass());
    this.generateLoadout();
  }

  generateLoadout() {
    const playerClass = this.playerForm.get("playerClass")?.value;
    this.loadout = this.itemRandomizerService.getRandomLoadout(playerClass || "LIGHT")
    // this.reserveLoadout = this.itemRandomizerService.getRandomLoadout(playerClass || "LIGHT", 4).reserveLoadout;
    // console.log("player class", playerClass);
    // console.log("main loadout", this.mainLoadout);
    // console.log("reserve loadout", this.reserveLoadout);
  }

}
