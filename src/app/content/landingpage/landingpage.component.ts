import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OsdgDataService } from 'src/app/core/services/osdg-data.service';
import { extrapolateSDGGains } from 'src/app/core/sdg_extrapolation'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  form: FormGroup = new FormGroup({
    projectName: new FormControl(''),
    projectDescription: new FormControl(''),
  });

  loginError: boolean = false;

  @Output() submitEM = new EventEmitter();

  public projectName:string = "";
  public projectDescription:string = "";

  public SDGs:number[] = [];
  public detectedSDGSelection:number[] = [];
  public extrapolatedSDGGains:number[] = [];
  public extrapolatedSDGGainsSelection:number[] = [];


  constructor(private osdgDataService: OsdgDataService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
    const { projectName, projectDescription } = this.form.value;
    this.projectName = projectName;
    this.projectDescription = projectDescription;
    this.osdgDataService.setProjectName(projectName);
    this.osdgDataService.setProjectDescription(projectDescription);
    this.SDGs = this.osdgDataService.getSDGs()
  }

  submitDetectedSDGSelect(SDG: number) {
      this.detectedSDGSelection.push(SDG)
    }

  submitDetectedSDGs() {
    this.extrapolatedSDGGains = extrapolateSDGGains(this.detectedSDGSelection)
    }

    submitExtrapolatedSDGGainsSelect(SDG: number) {
      this.extrapolatedSDGGainsSelection.push(SDG)
    }

  }
