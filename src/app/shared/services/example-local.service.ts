import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleLocalService {
  name = 'Abel';

  constructor() {}

  setName(newName: string) {
    this.name = newName;
  }

  getName() {
    return this.name;
  }
}
