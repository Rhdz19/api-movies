import { Controller, Get, Param } from '@nestjs/common';
import { Movie } from '../interfaces/movies.interface';

@Controller('movies')
export class MoviesController {
  private readonly movies_data: Movie[];

  constructor() {
    this.movies_data = [
      {
        id: 1,
        title: 'The Shawshank Redemption',
        year: 1994,
      },
      {
        id: 2,
        title: 'The Godfather',
        year: 1972,
      },
      {
        id: 3,
        title: 'Pulp Fiction',
        year: 1994,
      },
    ];
  }

  @Get()
  findAll(): Movie[] {
    return this.movies_data;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Movie {
    const movie = this.movies_data.find((item) => item.id === parseInt(id, 10));
    return movie;
  }
}
