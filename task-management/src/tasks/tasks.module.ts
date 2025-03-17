import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],//they are injectible services
})
export class TasksModule {}

/* Dependency Injection in NestJS */
/*
Any Component in NestJS can inject a service by declaring a constructor with the service as a parameter.
The service must be provided by a module that is in the same or a parent module.
The service must be decorated with @Injectable().
The service must be exported from the module that provides it.
The service must be listed in the providers array of the module that provides it.
The service must be listed in the imports array of the module that injects it.
The service must be listed in the exports array of the module that provides it if it is to be used in other modules.
*/
