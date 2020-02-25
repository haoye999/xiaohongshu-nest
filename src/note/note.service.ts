import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class NoteService {
  constructor(private readonly httpService: HttpService) {}

  getNode(id): Promise<AxiosResponse> {
    return this.httpService
      .get(`/wx_mp_api/sns/v1/note/${id}/single_feed`, {
        headers: {
          authorization: 'f38d4bc0-18c7-4595-80ba-d70313c0045f',
        }
      })
      .toPromise();
  }
}
