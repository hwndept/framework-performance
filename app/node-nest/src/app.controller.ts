import { Controller, Get, Param } from '@nestjs/common';

function factorial(n: number) {
  if (n === 0) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

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

  @Get('/factorial/:num')
  getFactorial(@Param('num') num: number): number {
    return factorial(num);
  }
}
