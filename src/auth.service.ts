import { Subject, of } from "rxjs";
import { delay } from "rxjs/operators";
class AuthService {
  isAuthenticated$: Subject<boolean> = new Subject();

  public login() {
    of(null)
      .pipe(delay(3000))
      .subscribe(() => {
        this.isAuthenticated$.next(true);
      });
  }
}

export default new AuthService();
