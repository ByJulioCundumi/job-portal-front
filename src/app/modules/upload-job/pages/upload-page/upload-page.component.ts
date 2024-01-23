import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
import { setModal } from 'src/app/state/modalState/modalActions';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.dispatch(setModal({isOpen: false}))
  }
}
