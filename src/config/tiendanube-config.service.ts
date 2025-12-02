import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TiendaNubeConfigService {
  constructor(private readonly configService: ConfigService) {}

  private readonly apiVersion = '2025-03';
  private readonly storeId = '1894966';

  getApiBaseUrl(): string {
    return this.configService.get<string>('TIENDANUBE_API_URL') ?? '';
  }

  getApiUrl(): string {
    return `${this.getApiBaseUrl()}/${this.apiVersion}/${this.storeId}`;
  }

  getAuthToken(): string {
    return this.configService.get<string>('TIENDANUBE_AUTH_TOKEN') ?? '';
  }

  getHeaders(): Record<string, string> {
    return { Authentication: `bearer ${this.getAuthToken()}` };
  }
}
