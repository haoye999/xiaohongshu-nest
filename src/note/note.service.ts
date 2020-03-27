import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { MyHttpService } from '../common/module/http/http.service';
import { CommentQueryDto, RelateQueryDto } from './dto/comment.dto';
import { generateXSign } from 'src/common/utils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NoteService {
  constructor(
    private readonly httpService: MyHttpService,
    private readonly configService: ConfigService,
  ) {}

  getNode(id: string): Promise<AxiosResponse> {
    const url = `/fe_api/burdock/weixin/v2/note/${id}/single_feed`;
    return this.httpService.request({
      method: 'GET',
      url,
      headers: {
        'x-sign': generateXSign(url),
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

  getRelated(id: string, params: RelateQueryDto) {
    const url = `/fe_api/burdock/weixin/v2/note/${id}/related`;
    return this.httpService.request({
      method: 'GET',
      url,
      params,
      headers: {
        'x-sign': generateXSign(url, params),
      },
    });
  }
}
