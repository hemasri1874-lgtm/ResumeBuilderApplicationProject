import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumeDataService } from '../../services/resume-data';
import { Photo } from '../../services/photo';

@Component({
  selector: 'app-editable-resume',
  imports: [FormsModule, CommonModule],
  templateUrl: './editable-resume.html',
  styleUrl: './editable-resume.scss',
})
export class EditableResume {
  photoUrl: string | ArrayBuffer | null = null;

  constructor(
    public resume: ResumeDataService,
    private photoService: Photo
  ) {}

  onFileSelected(event: any) : void{
    const file = event.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.photoUrl = reader.result;
      this.photoService.photoUrl = this.photoUrl;
    };
    reader.readAsDataURL(file);
  }
}
