import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { selectRole } from 'src/app/store/selectors/user.selector';

@Directive({
  selector: '[appRole]',
})
export class RoleDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private store: Store,
  ) {}

  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.store
      .select(selectRole)
      .pipe(takeUntil(this.destroy$))
      .subscribe((userRole) => {
        if (userRole === 'ROLE_ADMIN') {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
