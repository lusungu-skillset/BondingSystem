import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Parent } from './entities/parent.entity';
import { ParentController } from './parent-service.controller';
import { ParentService } from './parent-service.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('PARENT_DB_HOST'),
        port: Number(config.get('PARENT_DB_PORT')),
        username: config.get('PARENT_DB_USERNAME'),
        password: config.get('PARENT_DB_PASSWORD'),
        database: config.get('PARENT_DB_NAME'),
        entities: [Parent],
        synchronize: true,
      }),
    }),

    TypeOrmModule.forFeature([Parent]),
  ],
  controllers: [ParentController],
  providers: [ParentService],
})
export class AppModule {}
