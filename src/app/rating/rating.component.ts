import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() maxRating: number = 5;
  @Input() initialRating: number = 0;
  @Output() ratingUpdated = new EventEmitter<number>();

  stars: { active: boolean }[] = [];

  ngOnInit(): void {
    this.initializeStars();
  }

  initializeStars() {
    for (let i = 0; i < this.maxRating; i++) {
      this.stars.push({ active: i < this.initialRating });
    }
  }

  rate(star: { active: boolean }) {
    const rating = this.stars.indexOf(star) + 1;
    this.stars.forEach((s, index) => (s.active = index < rating));
    this.ratingUpdated.emit(rating);
  }
}

