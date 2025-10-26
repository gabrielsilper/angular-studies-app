type Anime = {
  id: number;
  name: string;
  altName: string;
};

type Character = {
  id: number;
  name: string;
};

export class Quote {
  constructor(private content: string, private anime: Anime, private character: Character) {}
}
