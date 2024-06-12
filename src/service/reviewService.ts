import Review from "../models/review";

export class ReviewService {
    private reviews: Review[];
  
    constructor() {
      this.reviews = [];
    }
  
    async getReviews(): Promise<Review[]> {
      return this.reviews;
    }
  
    async getReview(id: string): Promise<Review | undefined> {
      return this.reviews.find((review) => review.id === id);
    }
  
    async createReview(review: Review): Promise<Review> {
      this.reviews.push(review);
      return review;
    }
  
    async updateReview(id: string, review: Review): Promise<Review | undefined> {
      const index = this.reviews.findIndex((r) => r.id === id);
      if (index >= 0) {
        this.reviews[index] = review;
        return review;
      }
      return undefined;
    }
  
    async deleteReview(id: string): Promise<void> {
      const index = this.reviews.findIndex((r) => r.id === id);
      if (index >= 0) {
        this.reviews.splice(index, 1);
      }
    }
  }