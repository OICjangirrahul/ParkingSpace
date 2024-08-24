import { Injectable } from '@nestjs/common';
import { add } from '../../../libs/sample/dist';

@Injectable()
export class AppService {
  getHello() {
    const aa = add(12, 4);
    return aa;
  }
}
