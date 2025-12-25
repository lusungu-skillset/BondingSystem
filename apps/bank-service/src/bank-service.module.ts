import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Bank } from './entities/bank.entity';
import { BankController } from './bank-service.controller';
import { BankService } from './bank-service.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('BANK_DB_HOST'),
        port: Number(config.get('BANK_DB_PORT')),
        username: config.get('BANK_DB_USERNAME'),
        password: config.get('BANK_DB_PASSWORD'),
        database: config.get('BANK_DB_NAME'),
        entities: [Bank],
        synchronize: true,
      }),
    }),

    TypeOrmModule.forFeature([Bank]),
  ],
  controllers: [BankController],
  providers: [BankService],
})
export class AppModule {}
