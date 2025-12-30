import { Controller, All, Req, Body, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ProxyService } from './proxy.service';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

@Controller()
export class ProxyController {
  constructor(private readonly proxy: ProxyService) {}

  @All('auth/register')
  register(@Req() req: Request, @Body() body: any) {
    return this.proxy.forward(
      process.env.AUTH_SERVICE_URL!,
      req.method,
        '/auth/register',
      body,
    );
  }

  @All('auth/login')
  login(@Req() req: Request, @Body() body: any) {
    return this.proxy.forward(
      process.env.AUTH_SERVICE_URL!,
      req.method,
        '/auth/login',
      body,
    );
  }

  @UseGuards(JwtAuthGuard)
  @All('personal/*')
  personal(@Req() req: Request, @Body() body: any) {
    return this.proxy.forward(
      process.env.PERSONAL_SERVICE_URL!,
      req.method,
      req.originalUrl.replace('/personal', ''),
      body,
    );
  }

  @UseGuards(JwtAuthGuard)
  @All('bank/*')
  bank(@Req() req: Request, @Body() body: any) {
    return this.proxy.forward(
      process.env.BANK_SERVICE_URL!,
      req.method,
      req.originalUrl.replace('/bank', ''),
      body,
    );
  }

  @UseGuards(JwtAuthGuard)
  @All('parent/*')
  parent(@Req() req: Request, @Body() body: any) {
    return this.proxy.forward(
      process.env.PARENT_SERVICE_URL!,
      req.method,
      req.originalUrl.replace('/parent', ''),
      body,
    );
  }

  @UseGuards(JwtAuthGuard)
  @All('loan/*')
  loan(@Req() req: Request, @Body() body: any) {
    return this.proxy.forward(
      process.env.LOAN_SERVICE_URL!,
      req.method,
      req.originalUrl.replace('/loan', ''),
      body,
    );
  }
}
