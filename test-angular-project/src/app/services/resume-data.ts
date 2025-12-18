import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resume } from '../models/resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private apiUrl = 'https://resumebuilderapplicationproject.onrender.com/api/users';
  private resume: Resume;

  constructor(private http: HttpClient) {   // ✅ Inject HttpClient here
    this.resume = new Resume();
  }

  getResume(): Resume {
    return this.resume;
  }

  get name(): string {
    return this.resume.name;
  }
  get email(): string {
    return this.resume.email;
  }
  get phone(): string {
    return this.resume.phone;
  }
  get address(): string[] {
    return this.resume.address;
  }
  get links(): string[] {
    return this.resume.links;
  }
  get languages(): string[] {
    return this.resume.languages;
  }
  get aboutMe(): string {
    return this.resume.aboutMe;
  }
  get skills(): string[] {
    return this.resume.skills;
  }
  get experience(): string[] {
    return this.resume.experience;
  }
  get education(): string[] {
    return this.resume.education;
  }
  get projects(): { name: string; description: string }[] {
    return this.resume.projects;
  }
  get courses(): string[] {
    return this.resume.courses;
  }

  // === Setters ===
  set name(value: string) {
    this.resume.name = value;
  }
  set email(value: string) {
    this.resume.email = value;
  }
  set phone(value: string) {
    this.resume.phone = value;
  }
  set address(value: string[]) {
    this.resume.address = value;
  }
  set links(value: string[]) {
    this.resume.links = value;
  }
  set languages(value: string[]) {
    this.resume.languages = value;
  }
  set aboutMe(value: string) {
    this.resume.aboutMe = value;
  }
  set skills(value: string[]) {
    this.resume.skills = value;
  }
  set experience(value: string[]) {
    this.resume.experience = value;
  }
  set education(value: string[]) {
    this.resume.education = value;
  }
  set projects(value: { name: string; description: string }[]) {
    this.resume.projects = value;
  }
  set courses(value: string[]) {
    this.resume.courses = value;
  }

  // === Backend communication ===
  saveResume(): Observable<any> {
    const payload = {
      name: this.resume.name,
      email: this.resume.email,
      resumeData: this.resume,
    };
    return this.http.post(this.apiUrl, payload);
  }

  fetchResume(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?email=${email}`);
  }
}

