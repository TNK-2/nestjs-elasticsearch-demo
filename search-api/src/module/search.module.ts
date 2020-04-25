import { Module } from '@nestjs/common';
import { SearchController } from '../controller/search.controller';
import { SearchService } from '../domain/service/search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: process.env.SEARCH_HOST,
    })  
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
