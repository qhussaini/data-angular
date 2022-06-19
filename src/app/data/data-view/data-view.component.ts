import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  data: any;
  loading: boolean = false;
  public newManufacturerForm: FormGroup;

  constructor(
    private dataService: DataService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._getAllData();
  }

  onAddNewClick(context: any) {
    this._setUserForm();
    this.modalService.open(context, {
      size: 'lg',
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'Quickview' 
    }).result.then((result) => {
      `Result ${result}`
    }, (reason) => {
    });
  }

  onCreate() {
    if (this.newManufacturerForm.invalid) return this.toastr.error('All fields mark(*) is required', 'Error');;
    this.loading = true;
    const manufacturerData = {
      manufacturerName: this.newManufacturerForm.get('manufacturerName').value,
      description: this.newManufacturerForm.get('description').value,
    }
    this.dataService.addnewData(manufacturerData).subscribe(() => {
      this.loading = false;
      this.toastr.success('Manufacturer is created', 'Create Status');
      this.modalService.dismissAll();
      this._getAllData();
    })
  }

  private _getAllData() {
    this.loading = true;
    this.dataService.getAllData().subscribe(data => {
      this.loading = false;
      this.data = data;
    })
  }
  private _setUserForm() {
    this.newManufacturerForm = this.fb.group({
      manufacturerName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

}
