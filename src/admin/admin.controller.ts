import { Controller, Get } from '@nestjs/common';

/**
 * Sub-Domain Routing#
 * The @Controller decorator can take a host option to require that the HTTP host of the incoming requests matches some specific value.
 */

@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin Page';
  }
}
