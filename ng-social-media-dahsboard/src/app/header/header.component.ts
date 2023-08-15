import { Component } from '@angular/core';
import 'hammerjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  color = 'indigo';
  checked = false;
  disabled = false;
  slideToggleChange() {}
}
