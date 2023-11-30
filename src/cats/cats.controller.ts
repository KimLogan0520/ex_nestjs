import {
  Body,
  Controller,
  Get,
  Header,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { Response } from 'express';

/**
 * 라우트 경로는 @Controller에 선언된 접두사와, 메서드 데코레이터(@Get)에 지정된 경로를 연결하여 결정됨
 * findAll과 같은 함수명은 개발자 임의 ( Nest가 신경쓰지 않음 )
 *
 * Routes with parameters should be declared after any static paths. This prevents the parameterized paths from intercepting traffic destined for the static paths.
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

  /**
   * DTO는 데이터가 네트워크를 통해 전송될 방식을 정의하는 객체
   * nest에서는 js es6표준의 일부이기도한 클래스를 사용해 dto를 만들 것을 권장 ( 타입스크립트 interface는 nest runtime시 참조할 수 없다 ) <== 공식문서 참고!!
   * Our ValidationPipe can filter out properties that should not be received by the method handler. In this case, we can whitelist the acceptable properties, and any property not included in the whitelist is automatically stripped from the resulting object. In the CreateCatDto example, our whitelist is the name, age, and breed properties. Learn more here.
   */
  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    console.log('*==> createCatDto :', createCatDto);
    return 'This action adds a new cat';
  }

  @Post('X')
  createX(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  // @Get()
  // @HttpCode(200)
  // async findAll(): Promise<any[]> {
  //   return [];
  // }

  /**
   * The above code is fully valid. Furthermore, Nest route handlers are even more powerful by being able to return RxJS observable streams. Nest will automatically subscribe to the source underneath and take the last emitted value (once the stream is completed).
   */
  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }

  @Get('X')
  findAllX(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log('*==> params.id :', params.id);
    return `This action returns a #${params.id} cat`;
  }
}

// ✅ Example ✅
// import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
//
// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Body() createCatDto: CreateCatDto) {
//     return 'This action adds a new cat';
//   }
//
//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all cats (limit: ${query.limit} items)`;
//   }
//
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} cat`;
//   }
//
//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     return `This action updates a #${id} cat`;
//   }
//
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} cat`;
//   }
// }
