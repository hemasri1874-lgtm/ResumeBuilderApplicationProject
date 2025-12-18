import { ElementRef, Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root',
})
export class PdfGenerator {
  private resumeElement !: HTMLElement;

  setResumeElement(element:ElementRef):void{
    if(!element){
      throw new Error("Element does not exists!")
    }
    this.resumeElement = element.nativeElement;
  }

  generateResume(fileName: string ='resume.pdf'):void{
    if(!this.resumeElement) {
      throw new Error('Resume element is not set!');
    }

    html2canvas(this.resumeElement, {
      scale:1.75,
      useCORS:true,
    }).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4');
      const pageWidth = 210;
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0,0,imgWidth,imgHeight);
      pdf.save(fileName);
    })
  }
}
