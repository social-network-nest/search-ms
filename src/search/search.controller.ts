import { Controller } from '@nestjs/common';
import { SearchService } from './search.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @MessagePattern({ cmd: 'search' })
  search() {
    return 'search';
  }
}
