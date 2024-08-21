import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Report } from './reports/entities/reports.entity';

@Module({
  imports: [UsersModule, ReportsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mask',
    database: 'mask',
    entities: [User, Report],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
