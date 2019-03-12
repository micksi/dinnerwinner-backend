import { NextFunction, Request, Response, Router } from 'express';


/**
 * @description
 * Denne klasse er lavet som en illustration af hvordan REST API routes implementeres.
 * Routes skal som udgangs punkt IKKE gøre brug af nested paths så som "/articles/user"
 * men implementere kun "/" og eventuelle optionelle parameterer så som "/:id".
 *
 * Asynkrone kald gøres udelukkende ved hjælp af Promises!!!
 *
 * Specificering af den nøjagtive path som routesne ligger på angives når
 * routesne registreres, se eksemplet.
 *
 * @example
 * // registrering af routes sker i app.ts
 * const someRoute = new SomeRoute();
 * server.addRoute('/some', someRoute.router)
 *
 * @see server.ts
 * server.ts håndterer route registrering i serveren se metoden addRoutes
 */
export default class TestRoute {
  router;
  constructor() {
    this.router = Router();
    this.init();
  }

  // As this method will be called in a context of a different class, we need to bind methods objects to current class.
  public init() {
    this.router.route('/')
      .get(this.test.bind(this));
  }

  private test(request: Request, response: Response) {
    console.log("23456")
    response.status(404).json({ text: "hello" })


  }
}
