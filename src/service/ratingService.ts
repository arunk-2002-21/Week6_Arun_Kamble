import Rating from "../models/rating";

export class RatingService {
    private ratings: Rating[];
  
    constructor() {
      this.ratings = [];
    }
  
    async getRatings(): Promise<Rating[]> {
      return this.ratings;
    }
  
    async getRating(id: string): Promise<Rating | undefined> {
      return this.ratings.find((rating) => rating.id === id);
    }
  
    async createRating(rating: Rating): Promise<Rating> {
      this.ratings.push(rating);
      return rating;
    }
  
    async updateRating(id: string, rating: Rating): Promise<Rating | undefined> {
      const index = this.ratings.findIndex((r) => r.id === id);
      if (index >= 0) {
        this.ratings[index] = rating;
        return rating;
      }
      return undefined;
    }
  
    async deleteRating(id: string): Promise<void> {
      const index = this.ratings.findIndex((r) => r.id === id);
      if (index >= 0) {
        this.ratings.splice(index, 1);
      }
    }
  }