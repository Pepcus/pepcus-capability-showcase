import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import {EncryptionService} from '../encryption.service';

@Component({
  selector: 'app-file-encryption',
  templateUrl: './file-encryption.component.html',
  styleUrls: ['./file-encryption.component.css']
})
export class FileEncryptionComponent implements OnInit {

  @ViewChild('f') submitForm: NgForm;
  @ViewChild('AccUserImg') AccUserImage;
  key: string;



  constructor(private eS: EncryptionService) { }

  ngOnInit() {
  }

  onSubmit() {
    let formData = new FormData();
    formData.append('file', this.AccUserImage.nativeElement.files[0]);
    formData.append('key', this.submitForm.value.key);
    this.eS.encryptFile(formData)
      .subscribe(
        (response: any) => console.log(response),
        (error) => console.log(error)
      );
  }
}
