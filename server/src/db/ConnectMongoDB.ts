import mongoose from 'mongoose';

export default class ConnectMongoDB {
  private URI: string;

  constructor(uri: string) {
    this.URI = uri;
  }

  public connect = async () => {
    try {
      await mongoose.connect(this.URI);
      console.log('MongoDB successfully connected!')
    } catch (error: any) {
      console.log('Error when trying to connect to MongoDB:', error.message);
    }
  }
}
