import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petition-form-overview',
  templateUrl: './petition-form-overview.component.html',
  styleUrls: ['./petition-form-overview.component.sass'],
})
export class PetitionFormOverviewComponent implements OnInit {
  constructor() {}

  value = 'Clear me';

  ngOnInit(): void {}
}
