import { Application } from 'express'
import homeRoutes from './home.routes'

export default class Routes {
  constructor(app: Application) {
    app.use('/home', homeRoutes);
  }
}
