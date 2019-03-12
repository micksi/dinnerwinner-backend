import * as express from 'express';
import * as http from 'http';

/**
 * @description
 * Konfigurering af serveren med Express, Apollo og S9Service.
 * -----------------------------------------------------------------------
 * OBS! Hvis du har behov for at ændre i denne klasse skal du overveje
 * om det kun er en lokal ændringer eller om det er noget som kunne gavne
 * alle services og skal ændres mere generelt i Template projektet.
 * -----------------------------------------------------------------------
 * @version 1.0
 *
 */
export class Server {
  protected app: express.Application;
  protected server: http.Server;
  private routes: Array<express.Router> = [];


  constructor(private port: string = '8080') {
    this.app = express();
    this.port = port;
    this.app.set('port', this.port);
    this.config();
  }

  private config() {
    this.app.use(express.json());
    this.server = http.createServer(this.app);
  }

  /* A simple public method to add routes to the application. */
  public addRoute(routeUrl: string, routerHandler: express.Router): void {
    if (this.routes.indexOf(routerHandler) === -1) {
      this.routes.push();
      this.app.use(routeUrl, routerHandler);
    }
  }

  public start() {
    this.server.listen(this.app.get('port'), () => {
      console.log(
        `App is running at:
http://localhost:${this.port} in ${this.app.get('env')} mode`
      );
      console.log('  Press CTRL-C to stop\n');
    });
  }
}
