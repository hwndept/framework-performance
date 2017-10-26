import { Controller, Get, Module, Req } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller('/')
export class TestController {
  @Get('/:name')
  helloName(@Req() req) {
    return `Hello ${req.params.name}!`;
  }

  @Get('/')
  hello() {
    return 'Hello!';
  }
}

@Module({
  controllers: [TestController],
  modules: [],
})
export class ApplicationModule {}

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
}

bootstrap();
