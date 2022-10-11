import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { SelectMultipleControlValueAccessor } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class OsdgDataService {
  public projectName: BehaviorSubject<string> = new BehaviorSubject('')
  public projectDescription: BehaviorSubject<string> = new BehaviorSubject('')

  constructor(private http: HttpClient) {}

  public setProjectName(projectName: string) {
    this.projectName.next(projectName)
  }

  public getProjectName(): BehaviorSubject<string> {
    return this.projectName
  }

  public setProjectDescription(projectDescription: string) {
    this.projectDescription.next(projectDescription)
  }

  public getProjectDescription(): BehaviorSubject<string> {
    return this.projectDescription
  }

  public createTask(): Observable<any> {
    return this.http.post('https://osdg.sdg4aal.eu/tasks/', {
      text:
        this.projectName.getValue() + ' ' + this.projectDescription.getValue(),
    })
  }

  public retrieveTask(task_id: string): Observable<any> {
    return this.http.get('https://osdg.sdg4aal.eu/tasks/' + task_id + '/')
  }

  public unpackSDGsfromOsdgTask(data: any): Set<number> {
    var results = new Set<number>()
    for (var SDGTuple of data['document_sdg_labels']) {
      results.add(+SDGTuple[0].slice(4))
    }
    return results
  }
}
