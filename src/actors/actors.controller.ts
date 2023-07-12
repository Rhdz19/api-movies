import { Controller, Get, Param } from '@nestjs/common';
import { Actor } from '../interfaces/actors.interface';

@Controller('actors')
export class ActorsController {
  private readonly actors_data: Actor[];

  constructor() {
    this.actors_data = [
      {
        id: 1,
        name: 'Leonardo DiCaprio',
        birthdate: 'November 11, 1974',
        movies: ['Titanic', 'The Revenant', 'Inception'],
      },
      {
        id: 2,
        name: 'Meryl Streep',
        birthdate: 'June 22, 1949',
        movies: ['The Devil Wears Prada', "Sophie's Choice", 'The Iron Lady'],
      },
      {
        id: 3,
        name: 'Tom Hanks',
        birthdate: 'July 9, 1956',
        movies: ['Forrest Gump', 'Cast Away', 'Saving Private Ryan'],
      },
    ];
  }

  @Get()
  findAll(): Actor[] {
    return this.actors_data;
  }

  @Get('movie/:title')
  findActorByMovie(@Param('title') title: string): string {
    const actor = this.actors_data.find((actor) =>
      actor.movies.includes(title),
    );
    return actor ? actor.name : 'No hay actores encontrados para esa película';
  }
}
