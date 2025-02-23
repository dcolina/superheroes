import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" class="toolbar">
        <span class="logo">
          <mat-icon>shield</mat-icon>
          Super Heroes
        </span>

        <!-- Desktop Menu -->
        <div class="nav-links desktop-only">
          <button mat-button routerLink="/">Home</button>
          <button mat-button routerLink="/heroes">Heroes</button>
          <button mat-button routerLink="/about">About</button>
        </div>

        <!-- Mobile Menu -->
        <button mat-icon-button [matMenuTriggerFor]="menu" class="mobile-only">
          <mat-icon>menu</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
          <button mat-menu-item routerLink="/">Home</button>
          <button mat-menu-item routerLink="/heroes">Heroes</button>
          <button mat-menu-item routerLink="/about">About</button>
        </mat-menu>
      </mat-toolbar>

      <main class="main-content">
        <div class="hero-section">
          <div class="hero-content">
            <h1>Welcome to Super Heroes Universe</h1>
            <p>Discover the amazing world of superheroes, their stories, and their powers.</p>
            <button mat-raised-button color="primary" routerLink="/heroes">
              <mat-icon>explore</mat-icon>
              Explore Heroes
            </button>
          </div>

          <div class="hero-images">
            <div class="floating-hero hero1">
              <img src="assets/images/spiderman.png" alt="Spider-Man">
            </div>
            <div class="floating-hero hero2">
              <img src="assets/images/batman.png" alt="Batman">
            </div>
            <div class="floating-hero hero3">
              <img src="assets/images/captain-america.png" alt="Captain America">
            </div>
            <div class="floating-hero hero4">
              <img src="assets/images/superman.png" alt="Superman">
            </div>
            <div class="floating-hero hero5">
              <img src="assets/images/ironman.png" alt="Iron Man">
            </div>
            <div class="floating-hero hero6">
              <img src="assets/images/flash.png" alt="Flash">
            </div>
          </div>
        </div>
      </main>

      <footer class="footer">
        <p>&copy; 2024 Super Heroes Universe. All rights reserved.</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .toolbar {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .nav-links {
      display: flex;
      gap: 16px;
    }

    .main-content {
      flex: 1;
      padding-top: 64px;
    }

    .hero-section {
      min-height: calc(100vh - 64px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      padding: 20px;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      max-width: 800px;
      z-index: 1;
    }

    .hero-content h1 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      margin-bottom: 1rem;
      animation: fadeInUp 0.8s ease;
    }

    .hero-content p {
      font-size: clamp(1rem, 2vw, 1.2rem);
      margin-bottom: 2rem;
      max-width: 600px;
      margin-inline: auto;
      animation: fadeInUp 0.8s ease 0.2s both;
    }

    .hero-content button {
      animation: fadeInUp 0.8s ease 0.4s both;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-inline: auto;
      padding: 8px 24px;
    }

    .hero-images {
      display: flex;
      flex-wrap: wrap; /* Allow wrapping to the next line */
      justify-content: space-around; /* Distribute space evenly */
      position: relative;
      width: 100%;
      height: auto; /* Adjust height as needed */
      pointer-events: none;
    }

    .floating-hero {
      opacity: 0.8;
      width: 30%; /* Set width to 30% for 3 images per row */
      margin: 10px; /* Add margin for spacing */
      img {
        width: 100%;
        height: auto; /* Maintain aspect ratio */
        object-fit: contain;
      }
    }

    .hero1 {
      width: 250px;
      top: 10%;
      left: 5%;
      animation: float 6s ease-in-out infinite;
    }

    .hero2 {
      width: 240px;
      top: 20%;
      right: 10%;
      animation: float 7s ease-in-out infinite 1s;
    }

    .hero3 {
      width: 230px;
      bottom: 20%;
      left: 20%;
      animation: float 5s ease-in-out infinite 0.5s;
    }

    .hero4 {
      width: 240px;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      animation: float 6.5s ease-in-out infinite 0.8s;
    }

    .hero5 {
      width: 220px;
      top: 40%;
      right: 15%;
      animation: float 6s ease-in-out infinite 1.2s;
    }

    .hero6 {
      width: 200px;
      bottom: 20%;
      left: 60%;
      transform: translateX(-50%);
      animation: float 5.5s ease-in-out infinite 0.3s;
    }

    .footer {
      background-color: #f5f5f5;
      padding: 20px;
      text-align: center;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive Design */
    .mobile-only {
      display: none;
    }

    @media (max-width: 768px) {
      .desktop-only {
        display: none;
      }

      .mobile-only {
        display: block;
      }

      .hero-section {
        padding: 16px;
      }

      .hero1, .hero2 {
        width: 120px;
      }

      .hero3 {
        width: 100px;
      }
    }
  `]
})
export class AppComponent {}
