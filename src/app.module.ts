import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://guirra5k:V84816756@cluster0.ub18p.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
