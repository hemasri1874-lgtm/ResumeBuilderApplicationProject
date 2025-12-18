import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PdfGenerator } from '../../services/pdf-generator';
import { ResumeDataService } from '../../services/resume-data';
import { Photo } from '../../services/photo';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, FormsModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements AfterViewInit, OnDestroy {
  @ViewChild('resume') resumeRef!: ElementRef;
  photoUrl: string | ArrayBuffer | null = null;
  private photoUrlSubscription!: Subscription;

  constructor(
    public pdfService: PdfGenerator,
    public resumeData: ResumeDataService,
    public photoService: Photo
  ) {}

  ngAfterViewInit() {
    this.pdfService.setResumeElement(this.resumeRef);
    this.photoUrlSubscription = this.photoService.photoUrl$.subscribe((url) => {
      this.photoUrl = url;
    });
  }

  ngOnDestroy() {
    if (this.photoUrlSubscription) {
      this.photoUrlSubscription.unsubscribe();
    }
  }

  isNotEmpty(str: string | null | undefined): boolean {
    return str != null && str.trim() !== '';
  }

  hasNonEmptyItems(array: string[]): boolean {
    return Array.isArray(array) && array.some((item) => item.trim().length >= 2);
  }

  hasNonEmptyProjects(projects: { name: string; description: string }[]): boolean {
    return (
      Array.isArray(projects) &&
      projects.some(
        (project) =>
          this.isNotEmpty(project.name) || this.isNotEmpty(project.description)
      )
    );
  }

  // ✅ NEW FUNCTION TO SAVE RESUME
  saveResume() {
    this.resumeData.saveResume().subscribe({
      next: (res) => {
        alert('✅ Resume saved successfully!');
        console.log('Response:', res);
      },
      error: (err) => {
        console.error('❌ Error saving resume:', err);
        alert('❌ Failed to save resume. Please check the backend.');
      },
    });
  }
}
