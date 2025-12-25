import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register } from './entities/register.entity';
import { AuthController } from './auth-service.controller';
import { AuthService } from './auth-service.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        type: 'mysql',
        host: cfg.get('AUTH_DB_HOST'),
        port: Number(cfg.get('AUTH_DB_PORT')),
        username: cfg.get('AUTH_DB_USERNAME'),
        password: cfg.get('AUTH_DB_PASSWORD'),
        database: cfg.get('AUTH_DB_NAME'),
        entities: [Register],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Register]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'dev-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
