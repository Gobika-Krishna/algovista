import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  githubUrl = 'https://github.com/Gobika-Krishna';

  linkedinUrl = 'https://www.linkedin.com/in/gobika-krishna/';

  resumeUrl = 'assets/resume/Gobika_Resume.pdf';

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
