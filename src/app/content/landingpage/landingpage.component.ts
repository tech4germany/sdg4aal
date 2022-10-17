import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { OsdgDataService } from 'src/app/core/services/osdg-data.service'
import { extrapolateSDGGains, extrapolateSDGHarms } from 'src/app/core/sdg_extrapolation'
import { IndicatorsService } from 'src/app/core/services/indicators.service'
import { delay, filter, tap, retryWhen, take } from 'rxjs'


const SDG_TITLES_DE = [
  "No one left behind",
  "Keine Armut",
  "Kein Hunger",
  "Gesundheit und Wohlergehen",
  "Hochwertige Bildung",
  "Geschlechtergerechtigkeit",
  "Sauberes Wasser und Sanitäreinrichtungen",
  "Bezahlbare und saubere Energie",
  "Menschenwürdige Arbeit und Wirtschaftswachstum",
  "Industrie, Innovation und Infrastruktur",
  "Weniger Ungleichheiten",
  "Nachhaltige Städte und Gemeinden",
  "Verantwortungsvoller Konsum und Produktion",
  "Maßnahmen zum Klimaschutz",
  "Leben unter Wasser",
  "Leben an Land",
  "Frieden, Gerechtigkeit und starke Institutionen",
  "Partnerschaften zur Erreichung der Ziele",
]

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

  @Output() submitEM = new EventEmitter()

  public projectName: string = ''
  public projectDescription: string = ''

  public osdgQueryProgressing: boolean = false
  public detectedSDGs = new Set<number>()
  public detectedSDGSelection = new Set<number>()
  public extrapolatedSDGGains = new Set<number>()
  public extrapolatedSDGGainsSelection = new Set<number>()

  public SDGGainsExplanations = new Array<string>()
  public SDGGainsExplained: boolean = false

  SDGGainsExplanationsForm: FormGroup = new FormGroup({
    SDG1: new FormControl(''),
    SDG2: new FormControl(''),
    SDG3: new FormControl(''),
    SDG4: new FormControl(''),
    SDG5: new FormControl(''),
    SDG6: new FormControl(''),
    SDG7: new FormControl(''),
    SDG8: new FormControl(''),
    SDG9: new FormControl(''),
    SDG10: new FormControl(''),
    SDG11: new FormControl(''),
    SDG12: new FormControl(''),
    SDG13: new FormControl(''),
    SDG14: new FormControl(''),
    SDG15: new FormControl(''),
    SDG16: new FormControl(''),
    SDG17: new FormControl(''),
  })

  public extrapolatedSDGHarms = new Set<number>()
  public extrapolatedSDGHarmsSelection = new Set<number>()

  public SDGHarmsExplanations = new Array<string>()
  public SDGHarmsExplained: boolean = false

  SDGHarmsExplanationsForm: FormGroup = new FormGroup({
    SDG1: new FormControl(''),
    SDG2: new FormControl(''),
    SDG3: new FormControl(''),
    SDG4: new FormControl(''),
    SDG5: new FormControl(''),
    SDG6: new FormControl(''),
    SDG7: new FormControl(''),
    SDG8: new FormControl(''),
    SDG9: new FormControl(''),
    SDG10: new FormControl(''),
    SDG11: new FormControl(''),
    SDG12: new FormControl(''),
    SDG13: new FormControl(''),
    SDG14: new FormControl(''),
    SDG15: new FormControl(''),
    SDG16: new FormControl(''),
    SDG17: new FormControl(''),
  })

  public getSDGTitles(language_code: string): string[] {
    if (language_code === 'de') {
      return SDG_TITLES_DE
    }
    return []
  }

  public getSDGSelection(): number[] {
    var result = new Set<number>([
      ...this.detectedSDGSelection,
      ...this.extrapolatedSDGGainsSelection,
    ])
    return [...result].sort((a, b) => a - b)
  }

  constructor(
    private osdgDataService: OsdgDataService,
    public indicatorsService: IndicatorsService,
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value)
    }
    const { projectName, projectDescription } = this.form.value
    this.projectName = projectName
    this.projectDescription = projectDescription
    this.detectedSDGs.clear()
    this.osdgDataService.setProjectName(projectName)
    this.osdgDataService.setProjectDescription(projectDescription)
    this.osdgDataService.createTask().subscribe((data: any) =>
      this.osdgDataService
        .retrieveTask(data.task_id)
        .pipe(
          tap((data: any) => {
            if (data['status'] == 'Error: Could not extract text') {
              this.osdgQueryProgressing = false
              console.log('Could not extract text')
            }
          }),
          filter(
            (data: any) => data['status'] != 'Error: Could not extract text'
          )
        )
        .pipe(
          tap((data: any) => {
            if (data['status'] == 'Pending') {
              console.log('Task was not completed.')
              throw new Error('Task incomplete!')
            }
          }),
          retryWhen(errors => errors.pipe(delay(1000), take(60)))
        )
        .subscribe((data: any) => {
          this.detectedSDGs = this.osdgDataService.unpackSDGsfromOsdgTask(data)
          this.osdgQueryProgressing = false
        })
    )
    this.osdgQueryProgressing = true
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

  submitSDGGainsExplanations() {
    const {
      SDG1,
      SDG2,
      SDG3,
      SDG4,
      SDG5,
      SDG6,
      SDG7,
      SDG8,
      SDG9,
      SDG10,
      SDG11,
      SDG12,
      SDG13,
      SDG14,
      SDG15,
      SDG16,
      SDG17,
    } = this.SDGGainsExplanationsForm.value
    this.SDGGainsExplanations[1] = SDG1
    this.SDGGainsExplanations[2] = SDG2
    this.SDGGainsExplanations[3] = SDG3
    this.SDGGainsExplanations[4] = SDG4
    this.SDGGainsExplanations[5] = SDG5
    this.SDGGainsExplanations[6] = SDG6
    this.SDGGainsExplanations[7] = SDG7
    this.SDGGainsExplanations[8] = SDG8
    this.SDGGainsExplanations[9] = SDG9
    this.SDGGainsExplanations[10] = SDG10
    this.SDGGainsExplanations[11] = SDG11
    this.SDGGainsExplanations[12] = SDG12
    this.SDGGainsExplanations[13] = SDG13
    this.SDGGainsExplanations[14] = SDG14
    this.SDGGainsExplanations[15] = SDG15
    this.SDGGainsExplanations[16] = SDG16
    this.SDGGainsExplanations[17] = SDG17
    this.SDGGainsExplained = true
    this.extrapolatedSDGHarms = extrapolateSDGHarms(new Set<number>([...this.detectedSDGSelection, ...this.extrapolatedSDGGainsSelection]))
  }

  addExtrapolatedSDGHarm(SDG: number) {
    this.extrapolatedSDGHarmsSelection.add(SDG)
  }

  deleteExtrapolatedSDGHarm(SDG: number) {
    this.extrapolatedSDGHarmsSelection.delete(SDG)
  }

  submitSDGHarmsExplanations() {
    const {
      SDG1,
      SDG2,
      SDG3,
      SDG4,
      SDG5,
      SDG6,
      SDG7,
      SDG8,
      SDG9,
      SDG10,
      SDG11,
      SDG12,
      SDG13,
      SDG14,
      SDG15,
      SDG16,
      SDG17,
    } = this.SDGHarmsExplanationsForm.value
    this.SDGHarmsExplanations[1] = SDG1
    this.SDGHarmsExplanations[2] = SDG2
    this.SDGHarmsExplanations[3] = SDG3
    this.SDGHarmsExplanations[4] = SDG4
    this.SDGHarmsExplanations[5] = SDG5
    this.SDGHarmsExplanations[6] = SDG6
    this.SDGHarmsExplanations[7] = SDG7
    this.SDGHarmsExplanations[8] = SDG8
    this.SDGHarmsExplanations[9] = SDG9
    this.SDGHarmsExplanations[10] = SDG10
    this.SDGHarmsExplanations[11] = SDG11
    this.SDGHarmsExplanations[12] = SDG12
    this.SDGHarmsExplanations[13] = SDG13
    this.SDGHarmsExplanations[14] = SDG14
    this.SDGHarmsExplanations[15] = SDG15
    this.SDGHarmsExplanations[16] = SDG16
    this.SDGHarmsExplanations[17] = SDG17
    this.SDGHarmsExplained = true
  }
}
