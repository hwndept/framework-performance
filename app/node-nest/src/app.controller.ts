import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello!';
  }

  @Get('/:name')
  getHelloName(@Param('name') name: string): string {
    return `Hello ${name}!`;
  }
}
