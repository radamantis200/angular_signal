import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { filter } from 'rxjs';
import { UserService } from '../services/user/user-service';
import { User } from '../interfaces/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit {
  public usersService = inject(UserService);

  public users = signal<User[]>([]);
  public currentPage = signal(1);

  public labelTotalUsers = computed(() => `Total de usuarios ${this.users().length}`);

  ngOnInit(): void {
    this.loadPage(this.currentPage());
  }

  loadPage(page: number) {
    this.usersService.loadPage(page)
      .pipe(
        filter(users => users.length > 0)
      )
      .subscribe(newUsers => {
        this.currentPage.set(page);
        this.users.update(currentUsers => [...currentUsers, ...newUsers])
      })
  }
}
