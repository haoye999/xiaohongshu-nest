import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { generateXSign } from '../common/utils';
import { MyHttpService } from '../common/module/http/http.service';

@Injectable()
export class UserService {
  constructor(private readonly httpService: MyHttpService) {}

  getUser(id): Promise<AxiosResponse> {
    const url = `/fe_api/burdock/v1/user/${id}`;
    return this.httpService.request({
      method: 'GET',
      url,
      headers: {
        'x-sign': generateXSign(url),
      },
    });
  }
}
