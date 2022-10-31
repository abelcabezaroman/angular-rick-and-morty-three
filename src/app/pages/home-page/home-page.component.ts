import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExampleLocalService } from 'src/app/shared/services/example-local.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  fruit = { name: 'Banan', dateExpire: '12/06/2000' };

  ratingForm: any;
  val: number = 4;
  value: number = 4;
  constructor(
    private formBuilder: FormBuilder,
    private exampleLocalService: ExampleLocalService
  ) {}

  ngOnInit(): void {
    this.ratingForm = this.formBuilder.group({
      rate: [2],
    });
    this.exampleLocalService.setName('Juan');
    console.log(this.exampleLocalService.getName());
  }
}
