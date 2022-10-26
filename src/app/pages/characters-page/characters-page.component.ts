import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { ExampleLocalService } from 'src/app/shared/services/example-local.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characters:any = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
   this.charactersService.getCharacters().subscribe((res: any) => {
     console.log(res);

     this.characters = res.results;
   })
  }

}
