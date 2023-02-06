import { Component } from '@angular/core';

@Component({
  selector: 'app-app-skills',
  templateUrl: './app-skills.component.html',
  styleUrls: ['./app-skills.component.css']
})
export class AppSkillsComponent {
  skill = ['c++', 'c#', 'php'];

  btnclicked() {
    console.log("downloading");
  }
}
