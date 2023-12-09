import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UsersModule, TeachersModule, StudentsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
