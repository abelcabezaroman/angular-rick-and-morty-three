import { Component, OnInit } from '@angular/core';
import { ExampleLocalService } from 'src/app/shared/services/example-local.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private exampleLocalService: ExampleLocalService) { }

  ngOnInit(): void {
    this.exampleLocalService.setName("Juan")
    console.log( this.exampleLocalService.getName());

  }

}
