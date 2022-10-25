import { delay, Observable, switchMap, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss'],
})
export class ValidateComponent implements OnInit {
  handler$: Observable<boolean>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.handler$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.authService.validateUser$(params['id']);
      }),
      tap((res: boolean) => {
        if (!res) {
          this.router.navigate(['/']);
        }
      })
    );
  }

  ngOnInit(): void {}
}
