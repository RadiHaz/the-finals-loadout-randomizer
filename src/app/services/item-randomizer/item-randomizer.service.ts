import {Injectable} from '@angular/core';
export interface IItem {
  id: number;
  name: string;
  img: string;
  class: string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class ItemRandomizerService {

  constructor() {
    this.setItemsImages();
  }


  setItemsImages() {
    this.items = this.items.map(item => {
      item.img = `assets/images/${item.type}/${item.class}/${item.name.toUpperCase()}.png`;
      return item;
    });
    // console.log('Images set', JSON.stringify(this.items));
  };

  sharedGadgets = [
    {id: 20, name: "Frag Grenade", img: "", shared: true, class: "ANY", type: "GADGET"},
    {id: 21, name: "Pyro Grenade", img: "", shared: true, class: "ANY", type: "GADGET"},
    {id: 23, name: "Goo Grenade", img: "", shared: true, class: "ANY", type: "GADGET"},
    {id: 24, name: "Gas Grenade", img: "", shared: true, class: "ANY", type: "GADGET"}
  ];

  light = [
    ...this.sharedGadgets,
    {id: 47, name: "Cloak", img: "", class: "LIGHT", type: "ABILITY"},
    {id: 48, name: "Grappling Hook", img: "", class: "LIGHT", type: "ABILITY"},
    {id: 49, name: "Dash", img: "", class: "LIGHT", type: "ABILITY"},
    {id: 25, name: "Glitch Grenade", img: "", class: "LIGHT", type: "GADGET"},
    {id: 26, name: "Stun Gun", img: "", class: "LIGHT", type: "GADGET"},
    {id: 27, name: "Vanishing Bomb", img: "", class: "LIGHT", type: "GADGET"},
    {id: 28, name: "Breach Charge", img: "", class: "LIGHT", type: "GADGET"},
    {id: 29, name: "Thermal Vision", img: "", class: "LIGHT", type: "GADGET"},
    {id: 30, name: "Smoke Grenade", img: "", class: "LIGHT", type: "GADGET"},
    {id: 22, name: "Flashbang", img: "", class: "LIGHT", type: "GADGET"},
    {id: 40, name: "Tracking Dart", img: "", class: "LIGHT", type: "GADGET"},
    {id: 40, name: "Gateway", img: "", class: "LIGHT", type: "GADGET"},
    {id: 38, name: "Sonar Grenade", img: "", class: "LIGHT", type: "GADGET"},
    {id: 1, name: "Dagger", img: "", class: "LIGHT", type: "WEAPON"},
    {id: 2, name: "LH1", img: "", class: "LIGHT", type: "WEAPON"},
    {id: 3, name: "M11", img: "", class: "LIGHT", type: "WEAPON"},
    {id: 4, name: "SH1900", img: "", class: "LIGHT", type: "WEAPON"},
    {id: 5, name: "SR-84", img: "", class: "LIGHT", type: "WEAPON"},
    {id: 6, name: "Sword", img: "", class: "LIGHT", type: "WEAPON"},
    {id: 7, name: "V9S", img: "", class: "LIGHT", type: "WEAPON"},
    {id: 8, name: "XP-54", img: "", class: "LIGHT", type: "WEAPON"},

  ];

  medium = [
    ...this.sharedGadgets,
    {id: 50, name: "Dematerializer", img: "", class: "MEDIUM", type: "ABILITY"},
    {id: 51, name: "Guardian Turret", img: "", class: "MEDIUM", type: "ABILITY"},
    {id: 52, name: "Healing Beam", img: "", class: "MEDIUM", type: "ABILITY"},
    {id: 32, name: "Defibrillator", img: "", class: "MEDIUM", type: "GADGET"},
    {id: 33, name: "Jump Pad", img: "", class: "MEDIUM", type: "GADGET"},
    {id: 34, name: "Gas Mine", img: "", class: "MEDIUM", type: "GADGET"},
    {id: 35, name: "Zipline", img: "", class: "MEDIUM", type: "GADGET"},
    {id: 36, name: "APS Turret", img: "", class: "MEDIUM", type: "GADGET"},
    {id: 37, name: "Explosive Mine", img: "", class: "MEDIUM", type: "GADGET"},
    {id: 39, name: "Glitch Mine", img: "", class: "MEDIUM", type: "GADGET"},
    {id: 39, name: "Data Reshaper", img: "", class: "MEDIUM", type: "GADGET"},
    {id: 9, name: "AKM", img: "", class: "MEDIUM", type: "WEAPON"},
    {id: 10, name: "CL-40", img: "", class: "MEDIUM", type: "WEAPON"},
    {id: 11, name: "FCAR", img: "", class: "MEDIUM", type: "WEAPON"},
    {id: 12, name: "Model 1887", img: "", class: "MEDIUM", type: "WEAPON"},
    {id: 13, name: "R .357", img: "", class: "MEDIUM", type: "WEAPON"},
    {id: 14, name: "Riot Shield", img: "", class: "MEDIUM", type: "WEAPON"},
  ];

  heavy = [
    ...this.sharedGadgets,
    {id: 53, name: "Charge N Slam", img: "", class: "HEAVY", type: "ABILITY"},
    {id: 54, name: "Mesh Shield", img: "", class: "HEAVY", type: "ABILITY"},
    {id: 55, name: "Goo Gun", img: "", class: "HEAVY", type: "ABILITY"},
    {id: 41, name: "C4", img: "", class: "HEAVY", type: "GADGET"},
    {id: 42, name: "RPG-7", img: "", class: "HEAVY", type: "GADGET"},
    {id: 43, name: "Dome Shield", img: "", class: "HEAVY", type: "GADGET"},
    {id: 44, name: "Barricade", img: "", class: "HEAVY", type: "GADGET"},
    {id: 45, name: "Explosive Mine", img: "", class: "HEAVY", type: "GADGET"},
    {id: 46, name: "Pyro Mine", img: "", class: "HEAVY", type: "GADGET"},
    {id: 46, name: "Anti Gravity Cube", img: "", class: "HEAVY", type: "GADGET"},
    {id: 31, name: "Motion Sensor", img: "", class: "HEAVY", type: "GADGET"},
    {id: 15, name: "Flamethrower", img: "", class: "HEAVY", type: "WEAPON"},
    {id: 16, name: "Lewis Gun", img: "", class: "HEAVY", type: "WEAPON"},
    {id: 17, name: "M60", img: "", class: "HEAVY", type: "WEAPON"},
    {id: 18, name: "SA1216", img: "", class: "HEAVY", type: "WEAPON"},
    {id: 19, name: "Sledgehammer", img: "", class: "HEAVY", type: "WEAPON"},
    {id: 19, name: "KS-23", img: "", class: "HEAVY", type: "WEAPON"}
  ];

  items: IItem[] = [...this.sharedGadgets, ...this.light, ...this.medium, ...this.heavy];

  filterItemsByType(playerClass: IItem[], itemType: string) {
    return playerClass.filter(item => item.type === itemType);
  }

  getRandomItem(itemArr: IItem[]) {
    const randomIndex = Math.floor(Math.random() * itemArr.length);
    return {item: itemArr[randomIndex], index: randomIndex};
  }

  getPlayerClass(name: string): IItem[] {
    if(name === "LIGHT") {
      return this.light;
    }
    else if(name === "MEDIUM") {
      return this.medium;
    }
    else {
      return this.heavy;
    }
   }

   handleRandomization(playerClass: IItem[], itemType: string) {
     const filteredItems = this.filterItemsByType(playerClass, itemType);
     return this.getRandomItem(filteredItems);
   }

  getRandomLoadout(className: string) {
    let selectedItems = [];

    const playerClass = this.getPlayerClass(className);

    const randomAbility = this.handleRandomization(playerClass, "ABILITY");
    selectedItems.push(randomAbility.item);

    const randomWeapon = this.handleRandomization(playerClass, "WEAPON");
    selectedItems.push(randomWeapon.item);

    const gadgetItems = this.filterItemsByType(playerClass, "GADGET");

    for (let i = 0; i < 3; i++) {
      let randomGadget = this.getRandomItem(gadgetItems);
      selectedItems.push(randomGadget.item);
      gadgetItems.splice(randomGadget.index, 1); // Avoid duplicates
    }
    console.log('Generated loadout:', selectedItems);
    return selectedItems;
  }

}
