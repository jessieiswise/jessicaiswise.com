import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-page')
export class AboutPage extends LitElement {
    static styles = css`
      :host {
        display: block;
        padding: 16px;
        color: var(--about-page-text-color, black);
      }
    `;

    render() {
        return html`
      <h1>About Me</h1>
      <p>
        Hello! I'm Jessica Wise, a seasoned FullStack Developer based in Seattle, WA. I am proficient in multiple languages including Python, JavaScript/Typescript, Java, HTML, and SQL. I have vast experience working with various frameworks such as Angular, React, Redux, Apollo, and RxJS.
      </p>
      <p>
        My cloud experience ranges across Kubernetes, Serverless, Pub/Sub, AI/ML, and Bigquery. I've also worked extensively with tools like Jenkins, Docker, Terraform, Webpack, and Gulp. In terms of databases, I've utilized Postgres, Cassandra, Redis, SQL, and NoSQL. I'm well-versed in APIs, including REST, Socket, RPC, and GraphQL.
      </p>
      <p>
        I started my journey in software development as a self-taught engineer at the age of 15 and later transitioned from IT to development. I'm Google Cloud Storage Developer, Google Cloud Developer, and Google for Work Deployment Engineer certified. 
      </p>
      <p>
        Throughout my career, I've held key roles in various organizations including Poggio Labs, Getlabs, Zonar Systems, and SADA Systems. I've led and been a part of several successful projects, driving brand consistency, user experience, and product variety.
      </p>
      <p>
        As a developer, I'm passionate about crafting user-friendly, efficient, and scalable web applications. I always aim to leverage my skills to make a positive impact on both my team and the end-users of the products I help create.
      </p>
    `;
    }
}
