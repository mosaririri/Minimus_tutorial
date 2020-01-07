import { Injectable } from '@angular/core';
import { AngularFireLiteFirestore, AngularFireLiteAuth } from 'angularfire-lite';
import { switchMap } from 'rxjs/operators';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(
    public fs: AngularFireLiteFirestore,
    public auth: AngularFireLiteAuth,
  ) { }

  getCities(){
    return this.auth.uid().pipe(switchMap((uid) => {
      return this.fs.read(`{$uid}`);
    })); 
  }

  addCity(name: string){
    return this.auth.uid()
        .pipe(switchMap((uid) => {
          return this.fs
              .write(`${uid}/$name`, {name, added: new Date()})
              .pipe(first());
        }), first());
  }
}
