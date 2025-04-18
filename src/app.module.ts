import { Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SearchModule, UserModule],
})
export class AppModule {}
