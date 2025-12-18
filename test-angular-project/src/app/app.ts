import { Component, signal } from '@angular/core';
import { EditableResume } from './components/editable-resume/editable-resume';
import { Download } from './components/download/download';
import { Resume } from './components/resume/resume';

@Component({
  selector: 'app-root',
  imports: [EditableResume, Download, Resume],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
