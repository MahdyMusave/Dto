import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FOrmDto } from './app.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  public form(@Body() Body:FOrmDto):FOrmDto{
    return Body;
  }

}
