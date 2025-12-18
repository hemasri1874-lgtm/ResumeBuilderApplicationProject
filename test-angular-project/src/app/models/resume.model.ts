export class Resume {
  name: string = '';
  email: string = '';
  phone: string = '';
  address: string[] = ['', '', '', ''];
  links: string[] = ['', '', '', ''];
  languages: string[] = ['', '', '', ''];
  aboutMe: string = '';
  skills: string[] = ['', '', '', ''];
  experience: string[] = ['', '', '', ''];
  education: string[] = ['', '', '', ''];
  projects: { name: string; description: string }[] = [
    { name: '', description: '' },
    { name: '', description: '' },
    { name: '', description: '' },
  ];
  courses: string[] = ['', '', '', ''];
}