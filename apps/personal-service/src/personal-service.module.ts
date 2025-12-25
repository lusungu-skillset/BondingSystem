import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Personal } from './entities/personal.entity';
import { PersonalController } from './personal-service.controller';
import { PersonalService } from './personal-service.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('PERSONAL_DB_HOST'),
        port: Number(config.get('PERSONAL_DB_PORT')),
        username: config.get('PERSONAL_DB_USERNAME'),
        password: config.get('PERSONAL_DB_PASSWORD'),
        database: config.get('PERSONAL_DB_NAME'),
        entities: [Personal],
        synchronize: true,
      }),
    }),

    TypeOrmModule.forFeature([Personal]),
  ],
  controllers: [PersonalController],
  providers: [PersonalService],
})
export class AppModule {}
