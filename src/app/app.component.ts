import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subjects';

  ngOnInit(){

    //#region :::::: Subject() :::::;
    let sub = new Subject();
    sub.subscribe(val=>console.log("simple Subject : ",val));
    sub.subscribe(val=>console.log("simple Subject : ",val));
    sub.subscribe(val=>console.log("simple Subject : ",val));

    sub.next(11);
    sub.next(12);

    //#endregion


    //#region  ::::::: behaviorSubject() :::::::::

    let bSubject = new BehaviorSubject<number>(13);

    bSubject.subscribe(val=>console.log("Behavior Subject :",val));
    bSubject.subscribe(val=>console.log("Behavior Subject :",val));

    bSubject.next(14);

    //#endregion


    //#region  ::::::: asyncSubject() :::::

    let aSubject = new AsyncSubject();

    aSubject.subscribe(val=>console.log("Async Subject :",val));
    aSubject.subscribe(val=>console.log("Async Subject :",val));

    aSubject.next(15);
    aSubject.next(16);
    aSubject.next(17);
    aSubject.complete();

    //#endregion


    //#region ::::::: ReplaySubject() :::::
    let rSubject = new ReplaySubject(2);

    rSubject.subscribe(val=>console.log("Replay Subject Used Before Next() Methods :",val));
    rSubject.next(18);
    rSubject.next(19);
    rSubject.next(20);
    rSubject.next(21);
    rSubject.next(22);
    rSubject.subscribe(val=>console.log("Replay Subject Used After Next() Methods :",val));


    //#endregion


    //#region :::::::; Void Subject() :::::
    let vSubject = new Subject<void>();

    vSubject.subscribe(()=>console.log("Void Called 1: "));
    vSubject.subscribe(()=>console.log("Void Called 2: "));

		vSubject.next();
    //#endregion

  }
}
