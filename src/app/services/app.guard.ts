import {Injectable} from "@angular/core";
import {CanLoad, Route, UrlSegment, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad{
    canLoad() {
        return undefined;
    }

}
