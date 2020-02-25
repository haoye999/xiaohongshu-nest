import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { generateXSign } from '../common/utils';

@Injectable()
export class HomeService {
  constructor(private readonly httpService: HttpService) {}

  getHomeFeed(query): Promise<AxiosResponse> {
    const url = '/wx_mp_api/sns/v1/homefeed';
    const config = {
      params: query,
      headers: {
        'x-sign': generateXSign(url, query),
      },
    };

    return this.httpService
      .get(url, config)
      .toPromise();
  }
}
