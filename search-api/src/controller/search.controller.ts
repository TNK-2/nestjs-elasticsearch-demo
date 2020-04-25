import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { SearchService } from '../domain/service/search.service';

@Controller('search')
export class SearchController {
  constructor( private readonly searchService: SearchService ) {}

  @Post('create')
  async createIndexAndInsert(@Body() documents: any[]) {
    return await this.searchService.bulkInsert(documents);
  }

  @Get('stations')
  async searchAllStation() {
    const results = await this.searchService.searchIndex();
    console.log(results)
    return results;
  }
}