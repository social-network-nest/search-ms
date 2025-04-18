import { Controller } from '@nestjs/common';
import { SearchService } from './search.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from 'src/user/user.service';

@Controller()
export class SearchController {
  constructor(
    private readonly searchService: SearchService,
    private readonly userService: UserService
  ) {}

  @MessagePattern({ cmd: 'search' })
  search(@Payload() payload: any) {
    return this.userService.listUsers();
  }
}
