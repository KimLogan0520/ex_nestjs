import { Controller, Get, Post } from '@nestjs/common';

/**
 * 라우트 경로는 @Controller에 선언된 접두사와, 메서드 데코레이터(@Get)에 지정된 경로를 연결하여 결정됨
 * findAll과 같은 함수명은 개발자 임의 ( Nest가 신경쓰지 않음 )
 */
@Controller('cats')
export class CatsController {
  // @Get()
  // findAll(@Req() request: Request): string {
  //   /**
  //    * 참고! Res를 라우터 핸들러에 주입하여 사용할때, 응답객체를 이용하여 응답을 보내야함 ( 예: res.json(...) || res.send(...) )
  //    */
  //   console.log('request :', request);
  //   return 'This action returns all cats';
  // }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
