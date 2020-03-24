import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class MyHttpService {
  constructor(private readonly httpService: HttpService) {}

  async request(config: AxiosRequestConfig) {
    try {
      const result = await this.httpService.request(config).toPromise();
      return result;
    } catch (error) {
      const {
        response: { status, statusText },
        message,
      } = error;
      console.log(error);
      throw new HttpException(
        {
          status: status,
          error: statusText,
          message,
        },
        status,
      );
    }
  }
}
