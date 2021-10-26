import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cv-github-corner',
  templateUrl: './github-corner.component.html',
  styleUrls: ['./github-corner.component.scss'],
  host: {
    class: 'cv-github-corner'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubCornerComponent {

  @Input()
  url: string;

}
