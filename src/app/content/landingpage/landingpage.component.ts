import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { OsdgDataService } from 'src/app/core/services/osdg-data.service'
import { extrapolateSDGGains } from 'src/app/core/sdg_extrapolation'
import { IndicatorsService } from 'src/app/core/services/indicators.service'
import { delay, map, retry, catchError, of, retryWhen, take } from 'rxjs'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    projectName: new FormControl(''),
    projectDescription: new FormControl(''),
  })

  loginError: boolean = false

  @Output() submitEM = new EventEmitter()

  public projectName: string = ''
  public projectDescription: string = ''

  public SDGs = new Set<number>()
  public detectedSDGSelection = new Set<number>()
  public extrapolatedSDGGains = new Set<number>()
  public extrapolatedSDGGainsSelection = new Set<number>()

  public getSDGSelection(): number[] {
    var result = new Set<number>([
      ...this.detectedSDGSelection,
      ...this.extrapolatedSDGGainsSelection,
    ])
    return [...result].sort((a, b) => a - b)
  }

  constructor(private osdgDataService: OsdgDataService, public indicatorsService: IndicatorsService) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value)
    }
    const { projectName, projectDescription } = this.form.value
    this.projectName = projectName
    this.projectDescription = projectDescription
    this.osdgDataService.setProjectName(projectName)
    this.osdgDataService.setProjectDescription(projectDescription)
    this.osdgDataService.createTask().subscribe((data: any) =>
      this.osdgDataService
        .retrieveTask(data.task_id)
        .pipe(
          map((data: any) => {
            if (data['status'] != 'Completed') {
              console.log('Task was not completed.')
              throw new Error('Task incomplete!')
            }
            return data
          }),
          retryWhen(errors => errors.pipe(delay(1000), take(60)))
        )
        .subscribe(
          (data: any) =>
            (this.SDGs = this.osdgDataService.unpackSDGsfromOsdgTask(data))
        )
    )
  }

  addDetectedSDG(SDG: number) {
    this.detectedSDGSelection.add(SDG)
  }

  deleteDetectedSDG(SDG: number) {
    this.detectedSDGSelection.delete(SDG)
  }

  submitDetectedSDGs() {
    this.extrapolatedSDGGains = extrapolateSDGGains(this.detectedSDGSelection)
  }

  addExtrapolatedSDGGain(SDG: number) {
    this.extrapolatedSDGGainsSelection.add(SDG)
  }

  deleteExtrapolatedSDGGain(SDG: number) {
    this.extrapolatedSDGGainsSelection.delete(SDG)
  }
}
