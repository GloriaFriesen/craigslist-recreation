import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [ListingService]
})
export class ListingsComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

  goToDetailPage(clickedListing: Listing) {
    this.router.navigate(['listings', clickedListing.id]);
  };

}
