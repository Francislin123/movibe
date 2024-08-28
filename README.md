# Movibe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Aws Solution Architecture
![Captura de Tela 2019-05-12 às 15 18 49](https://res.cloudinary.com/drc5ukr93/image/upload/v1724867475/zaipdvsan6nvrsqndkaw.png)

### About this Architecture
- The BFF Architecture (Backend for Frontend) is an architectural pattern used to improve communication between the frontends and backends of an application. It involves creating a dedicated backend for each type of frontend (web, mobile, etc.), allowing the backend to be adapted specifically to each client's needs.

- Main Features:
- Customization for each frontend: 
- Each frontend (web, mobile, smart TV, etc.) has an exclusive backend, which understands its specific needs and delivers formatted and optimized data for that client.
- Reduced complexity in the frontend: 
- As the backend already processes the data adequately, the frontend does not need to manipulate or transform the data received, reducing the processing load and improving performance.

- Functionality isolation: 
- Each BFF can implement specific logic without impacting other frontends, allowing for more agile and focused development.

- Improved performance and user experience: 
- The BFF architecture makes it easy to create APIs that respond quickly with the correct data format, improving the end user experience.

- Flow:
- The client (frontend) makes a request to the specific BFF.
- BFF handles the request by calling services in the traditional backend or other APIs.

- The BFF processes the data, performs the necessary aggregation or manipulation, and responds to the client with the data in the correct format.

- This architecture is ideal for applications that have multiple types of clients with different requirements, preventing the frontend from needing to adapt to generic APIs and ensuring more efficiency in the development of each part of the application.
