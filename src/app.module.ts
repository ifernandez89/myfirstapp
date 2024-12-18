import { Module } from '@nestjs/common';
import {TasksModule} from './tasks/tasks.module'
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, UsersModule, PaymentsModule],
  controllers: [HelloController],
})
export class AppModule {}
