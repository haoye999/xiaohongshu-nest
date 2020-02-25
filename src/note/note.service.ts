import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { MyHttpService } from '../common/module/http/http.service';

@Injectable()
export class NoteService {
  constructor(private readonly httpService: MyHttpService) {}

  getNode(id): Promise<AxiosResponse> {
    return this.httpService.request({
      method: 'GET',
      url: `/wx_mp_api/sns/v1/note/${id}/single_feed`,
      headers: {
        authorization: 'f38d4bc0-18c7-4595-80ba-d70313c0045f',
      },
    });
  }
}
