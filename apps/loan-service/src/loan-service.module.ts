import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Loan } from './entities/loan.entity';
import { LoanController } from './loan-service.controller';
import { LoanService } from './loan-service.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('LOAN_DB_HOST'),
        port: Number(config.get('LOAN_DB_PORT')),
        username: config.get('LOAN_DB_USERNAME'),
        password: config.get('LOAN_DB_PASSWORD'),
        database: config.get('LOAN_DB_NAME'),
        entities: [Loan],
        synchronize: true,
      }),
    }),

    TypeOrmModule.forFeature([Loan]),
  ],
  controllers: [LoanController],
  providers: [LoanService],
})
export class AppModule {}
