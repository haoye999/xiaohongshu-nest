import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { MyHttpService } from '../common/module/http/http.service';
import { CommentQueryDto } from './dto/comment.dto';

@Injectable()
export class NoteService {
  constructor(private readonly httpService: MyHttpService) {}

  getNode(id: string): Promise<AxiosResponse> {
    return this.httpService.request({
      method: 'GET',
      url: `/wx_mp_api/sns/v1/note/${id}/single_feed`,
      headers: {
        authorization: 'f38d4bc0-18c7-4595-80ba-d70313c0045f',
      },
    });
  }

  getComment(id: string, params: CommentQueryDto): Promise<AxiosResponse> {
    return this.httpService.request({
      method: 'GET',
      url: `/web_api/sns/v1/note/${id}/comment`,
      params,
      headers: {
        Referer:
          'https://servicewechat.com/wxffc08ac7df482a27/315/page-frame.html',
      },
    });
  }
}
