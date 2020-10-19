
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {

        const routeVal: any = route.routeConfig;
        const path: any = routeVal.path;
        let pathWithSlash = '/' + path;
        pathWithSlash = pathWithSlash.replace('/:id', '');
        const routes: any = JSON.parse(sessionStorage.getItem('permissions'));
        for (const route of routes) {
            if (route === pathWithSlash) {
                return true;
            }
        }
        this.router.navigate(['/login']);
        return false;
    }
}
