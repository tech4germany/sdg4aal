import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsdgDataService {

  public projectName: BehaviorSubject<string> = new BehaviorSubject("");
  public projectDescription: BehaviorSubject<string> = new BehaviorSubject("");

  constructor() { }

  public setProjectName(projectName:string) {
    this.projectName.next(projectName);
  }

  public getProjectName(): BehaviorSubject<string> {
    return this.projectName;
  }

  public setProjectDescription(projectDescription:string) {
    this.projectDescription.next(projectDescription);
  }

  public getProjectDescription(): BehaviorSubject<string> {
    return this.projectDescription;
  }

  public getSDGs(): number[] {
    return [4, 7, 16]
  }
}
