import { Injectable } from '@nestjs/common';
import { AxiosResponse, Method } from 'axios';
import { generateXSign } from '../common/utils';
import { MyHttpService } from '../common/module/http/http.service';

@Injectable()
export class HomeService {
  constructor(private readonly httpService: MyHttpService) {}

  getHomeFeed(query): Promise<AxiosResponse> {
    const url = '/wx_mp_api/sns/v1/homefeed';
    const config = {
      url,
      method: 'GET' as Method,
      params: query,
    };

    return this.httpService.request(config);
  }
}
