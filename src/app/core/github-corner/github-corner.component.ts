import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-github-corner',
  templateUrl: './github-corner.component.html',
  styleUrls: ['./github-corner.component.scss']
})
export class GithubCornerComponent {

  @Input()
  url: string;

}
