import { Component, OnInit } from '@angular/core';
import { UUID } from 'src/app/Utils/UUID';
import { DatabaseService } from 'src/app/providers/database.service';

@Component({
  selector: 'app-by-subject',
  templateUrl: './by-subject.component.html',
  styleUrls: ['./by-subject.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class BySubjectComponent implements OnInit {

  loading: boolean;
  step: number;
  auditToken: string;
  subjectID: string;

  constructor(private dbSrv: DatabaseService) {}

  ngOnInit() {
    this.step = 1;
    this.auditToken = UUID.create();
  }

  delete() {
    this.dbSrv.delete({
      auditToken: this.auditToken,
      subjectId: this.subjectID
    });
  }

  downzip() {
    this.dbSrv.downZip(this.subjectID);
  }

  data() {
    this.dbSrv.getData({
      auditToken: this.auditToken,
      subjectId: this.subjectID
    });
  }

  info() {
    this.dbSrv.getInfo({
      auditToken: this.auditToken,
      subjectId: this.subjectID
    });
  }
}
