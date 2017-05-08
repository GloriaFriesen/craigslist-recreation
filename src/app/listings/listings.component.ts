import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: Listing[] = [
    new Listing("Tent", 45, "camping", "tent.jpg", "Blue tent. No holes. Used once.", "Blake", 1),
    new Listing("Roller blades", 15, "skates", "skates.jpg", "Pristine. Never been worn.Didn't like 'em, didn't use 'em.'", "Gloria", 2),
    new Listing ("Kayak", 300, "water sports", "kayak.jpg", "Couple of bumps and bruises, but still keeps out the water. No holes.", "Grace", 3)
  ];

  constructor() { }

  ngOnInit() {
  }

}
