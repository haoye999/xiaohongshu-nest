import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { generateXSign } from '../common/utils';
import { MyHttpService } from '../common/module/http/http.service';
import { UserNoteDto, UserCollectDto } from './dto/user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private readonly httpService: MyHttpService,
    private readonly configService: ConfigService,
  ) {}

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

  getUserNote(id: string, params: UserNoteDto): Promise<AxiosResponse> {
    const url = `/wx_mp_api/sns/v1/note/user/${id}`;
    return this.httpService.request({
      method: 'GET',
      url,
      headers: {
        authorization: this.configService.get<string>('authorization'),
      },
      params,
    });
  }

  getUserCollect(id: string, params: UserCollectDto): Promise<AxiosResponse> {
    const url = `/wx_mp_api/sns/v1/note/${id}/faved`;
    return this.httpService.request({
      method: 'GET',
      url,
      headers: {
        authorization: this.configService.get<string>('authorization'),
      },
      params,
    });
  }
}
