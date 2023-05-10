import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-header')
export class Header extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem 0 1rem;
      background-color: #333;
      color: #fff;
      position: relative;
      z-index: 2;
    }

    nav {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #333;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease-in-out;
      transform: translateX(100%);
    }

    nav.open {
      transform: translateX(0);
    }

    nav a {
      margin-bottom: 1rem;
      color: #fff;
      text-decoration: none;
    }

    /* Styles for hamburger menu */
    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      z-index: 3;
    }

    .hamburger div {
      width: 2rem;
      height: 0.25rem;
      background-color: #fff;
      transition: all 0.3s linear;
    }

    /* Styles for open hamburger menu */
    .open div:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 10px);
    }

    .open div:nth-child(2) {
      opacity: 0;
    }

    .open div:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -10px);
    }

    /* Media query for small screens */
    @media (max-width: 600px) {
      nav {
        display: flex;
      }
    }

    /* Media query for larger screens */
    @media (min-width: 601px) {
      nav {
        position: static;
        transform: translateX(0);
        flex-direction: row;
        justify-content: flex-end;
      }
      nav a {
        margin-bottom: 0;
        margin-right: 1rem;
      }
      .hamburger {
        display: none;
      }
    }
  `;

  private isMenuOpen = false;

  private toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.requestUpdate();
  }

  render() {
    return html`
      <header>
        <h1>My Portfolio</h1>
        <nav class=${this.isMenuOpen ? 'open' : ''}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="hamburger ${this.isMenuOpen ? 'open' : ''}" @click=${this.toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
    `;
  }
}
