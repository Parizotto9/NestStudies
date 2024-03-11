import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// Se n tiver nada dentro do () a rota vai ser nenhum
// se tiver 'user' a rota vai ser user para entrar aqui
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // construtor que avisa é tipo um import do service, precisa ser declarado em app.module no provide

  // Se tiver nada em cima a rota para entrar aqui será o que está escrito aqui \/\/\/
  // se tiver algo em cima a rota será a de cima depois a daqui \/\/\/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
