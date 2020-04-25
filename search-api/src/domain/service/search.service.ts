import { ElasticsearchService } from "@nestjs/elasticsearch";
import { Injectable, HttpException } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class SearchService {
  constructor( private readonly esService: ElasticsearchService ) {}

  async bulkInsert (stations: any[]) {    
    const bulk = [];
    stations.forEach(station => {
      bulk.push({ 
        index: { _index: 'search', _type: 'stations' } 
      });
      bulk.push(station);
    });
    return await this.esService.bulk({
      body: bulk,
      index: 'search', 
      type: 'stations'
    })
    .then(res => ({status: 'success', data: res}))
    .catch(err => { throw new HttpException(err, 500); });
  }

  async searchIndex() {
    return await axios.get(
      'http://elasticsearch:9200/search/stations/_search'
    )
    .then(res => ({status: 'success', data: res.data.hits }))
    .catch(err => { throw new HttpException(err, 500); });
  }
}