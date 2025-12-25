import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class ProxyService {
  async forward(
    baseUrl: string,
    method: string,
    path: string,
    body?: any,
  ) {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: ['GET', 'DELETE'].includes(method) ? undefined : JSON.stringify(body),
      });
      return await response.json();
    } catch (error: any) {
      throw new HttpException('Service unavailable', 503);
    }
  }
}
