import { JsonpModule, Jsonp, BaseRequestOptions, 
  Response, ResponseOptions, Http, HttpModule } from "@angular/http";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import {SearchServiceObservable} from './search2.service';

describe('Service: Search', () => {

  let service: SearchServiceObservable;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule, HttpModule],
      providers: [
        SearchServiceObservable,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    // Get the MockBackend
    backend = TestBed.get(MockBackend);

    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(SearchServiceObservable);

  });

  it('search should return SearchItems', fakeAsync(() => {
    let mockResponse = {
      "resultCount": 1,
      "results": [
        {
          "artistId": 78500,
          "artistName": "U2",
          "trackName": "Beautiful Day",
          "artworkUrl60": "image.jpg",
        }]
    };

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      alert(111);
      console.log(connection);
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(mockResponse)
      }));
    });

    return service.search("U2").subscribe((data) => {
        //expect(data).toEqual(response);
        console.log('mockResponse', mockResponse.results[0]);
        console.log('search()', data[0]);
        expect(data.length).toBe(mockResponse.resultCount);
        expect(data[0].artistId).toBe(mockResponse.results[0].artistId);
        expect(data[0].artist).toBe(mockResponse.results[0].artistName);
        expect(data[0].name).toBe(mockResponse.results[0].trackName);
        expect(data[0].thumbnail).toBe(mockResponse.results[0].artworkUrl60);
      });
  }));
});
