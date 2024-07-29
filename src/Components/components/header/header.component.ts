import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUser } from '../../../app/Actions/UserAction';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private store: Store) {}

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const userId = Number(input.value);
    if (userId) {
      this.store.dispatch(loadUser({ id: userId }));
    }
  }
}
