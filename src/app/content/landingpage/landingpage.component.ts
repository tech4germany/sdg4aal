import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OsdgDataService } from 'src/app/core/services/osdg-data.service';

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

  private projectName:string = "";
  private projectDescription:string = "";

  public SDGs:number[] = [];

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

}
