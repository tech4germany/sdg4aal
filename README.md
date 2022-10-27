# SDG4AAL

This project is a simple Angular app, which tries to demonstrate that it is possible to combine existing services such as OSDG.ai
and current research on the SDGs to make their complexities and interconnectedness easier to grasp for potential funding applicants.

It has been developed as part of Tech4Germany 2022 in cooperation with the German Foreign Ministry.

As a demo-MVP it is not intended for productive use or further development. There has been no effort towards testing or maintainability.

## Architecture and data management

The app itself is frontend-only, there is no backend for user management or data storage.
The project title and description are sent via a [proxy](https://github.com/tech4germany/osdg-proxy) to the OSDG.ai API, which evaluates them for SDGs.
All other logic and data is contained in the end user's browser.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

During development and as a demo, the app is hosted on Firebase,
which is trivial to set up.
The Firebase configs are included in this repo, but you'll have to adjust the Firebase project.

If you have the Firebase tooling installed, you can bring your current workspace online via:

`ng build && firebase deploy`

### OSDG.ai API proxy

Due to the lack of TLS and limited authentication options OSDG.ai offers,
all requests towards it need to be sent unauthenticated through a proxy.
The app is currently hardcoded to use the proxy at https://osdg.sdg4aal.eu
The OSDG-proxy project is also available on GitHub: https://github.com/tech4germany/osdg-proxy
