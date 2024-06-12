import Book from "../models/book";

export class BookService {
    private books: Book[];
  
    constructor() {
      this.books = [];
    }
  
    async getBooks(): Promise<Book[]> {
      return this.books;
    }
  
    async getBook(id: string): Promise<Book | undefined> {
      return this.books.find((book) => book.id === id);
    }
  
    async createBook(book: Book): Promise<Book> {
      this.books.push(book);
      return book;
    }
  
    async updateBook(id: string, book: Book): Promise<Book | undefined> {
      const index = this.books.findIndex((b) => b.id === id);
      if (index >= 0) {
        this.books[index] = book;
        return book;
      }
      return undefined;
    }
  
    async deleteBook(id: string): Promise<void> {
      const index = this.books.findIndex((b) => b.id === id);
      if (index >= 0) {
        this.books.splice(index, 1);
      }
    }
  }