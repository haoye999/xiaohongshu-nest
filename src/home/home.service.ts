import { Injectable } from '@nestjs/common';
import { AxiosResponse, Method } from 'axios';
import { MyHttpService } from '../common/module/http/http.service';
import { ConfigService } from '@nestjs/config';
import { generateXSign } from 'src/common/utils';

@Injectable()
export class HomeService {
  constructor(
    private readonly httpService: MyHttpService,
    private readonly configService: ConfigService,
  ) {}

  getHomeFeed(query): Promise<AxiosResponse> {
    const url = '/fe_api/burdock/weixin/v2/homefeed/personalNotes';
    const params = {
      ...query,
      sid: this.configService.get<string>('sid'),
    };
    const config = {
      url,
      method: 'GET' as Method,
      params,
      headers: {
        'x-sign': generateXSign(url, params),
      },
    };

    return this.httpService.request(config);
  }

  getCategories(): Promise<AxiosResponse> {
    const url = '/wx_mp_api/sns/v1/homefeed/categories';
    return this.httpService.request({
      method: 'GET',
      url,
      headers: {
        authorization: this.configService.get<string>('authorization'),
      },
    });
  }
}
