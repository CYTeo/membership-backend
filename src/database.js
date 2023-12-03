const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('before connect');
    const connection = await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('After connect');

    console.log(`Connected to MongoDB database`);
  } catch (error) {
    console.error('Error connecting to MongoDB database:', error);
  }
};

module.exports = connectDB;
// module.exports = { connectDB: connectDB };
