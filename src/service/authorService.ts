import Author from "../models/author";

export class AuthorService {
    private authors: Author[];
  
    constructor() {
      this.authors = [];
    }
  
    async getAuthors(): Promise<Author[]> {
      return this.authors;
    }
  
    async getAuthor(id: string): Promise<Author | undefined> {
      return this.authors.find((author) => author.id === id);
    }
  
    async createAuthor(author: Author): Promise<Author> {
      this.authors.push(author);
      return author;
    }
  
    async updateAuthor(id: string, author: Author): Promise<Author | undefined> {
      const index = this.authors.findIndex((a) => a.id === id);
      if (index >= 0) {
        this.authors[index] = author;
        return author;
      }
      return undefined;
    }
  
    async deleteAuthor(id: string): Promise<void> {
      const index = this.authors.findIndex((a) => a.id === id);
      if (index >= 0) {
        this.authors.splice(index, 1);
      }
    }
  }
  