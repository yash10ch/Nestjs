import { Controller } from '@nestjs/common';
import { AppService } from './app.service';


/**
 * AppController is the main controller of the application.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
