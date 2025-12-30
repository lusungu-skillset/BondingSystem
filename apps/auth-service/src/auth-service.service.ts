import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Register } from './entities/register.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Register)
    private readonly repo: Repository<Register>,
    private readonly jwtService: JwtService,
  ) {}


  async register(data: Partial<Register>) {
    const exists = await this.repo.findOne({
      where: { RegNumber: data.RegNumber },
    });

    if (exists) {
      throw new ConflictException('RegNumber already exists');
    }

    return this.repo.save(this.repo.create(data));
  }

  async login(email: string, password: string) {
    const user = await this.repo.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email, RegNumber: user.RegNumber };
    const access_token = this.jwtService.sign(payload);
    return {
      access_token,
      user,
    };
  }
}
