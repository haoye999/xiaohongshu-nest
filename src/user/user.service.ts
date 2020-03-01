import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { generateXSign } from '../common/utils';
import { MyHttpService } from '../common/module/http/http.service';
import { UserNoteDto, UserCollectDto } from './dto/user.dto';

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

  getUserNote(id: string, params: UserNoteDto): Promise<AxiosResponse> {
    const url = `/wx_mp_api/sns/v1/note/user/${id}`;
    return this.httpService.request({
      method: 'GET',
      url,
      headers: {
        authorization: 'f38d4bc0-18c7-4595-80ba-d70313c0045f',
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
        authorization: 'f38d4bc0-18c7-4595-80ba-d70313c0045f',
      },
      params,
    });
  }
}
