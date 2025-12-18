import { Component } from '@angular/core';
import { PdfGenerator } from '../../services/pdf-generator';

@Component({
  selector: 'app-download',
  imports: [],
  templateUrl: './download.html',
  styleUrl: './download.scss',
})
export class Download {
  constructor(private pdfGeneratorService: PdfGenerator) {}

  generateResume(): void{
    this.pdfGeneratorService.generateResume();
  }
}
