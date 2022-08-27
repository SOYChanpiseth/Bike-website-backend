const Bike = require("../Model/bike.model");

module.exports = {
  createBike: async (req, res, next) => {
    try {
      const bike = new Bike(req.body);
      const result = await bike.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === "ValidationError") {
        next(createError(404, error.message));
        return;
      }
      next(error);
    }
  },
  listAllBike: async (req, res, next) => {
    try {
      const results = await Bike.find();
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },
  getBikeById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const bike = await Bike.findById(id);
      if (!bike) {
        throw createError(404, "Student with this id does not exist.");
      }
      res.send(bike);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(404, "Student with this id does not exist."));
        return;
      }
      next(error);
    }
  },
  updateBikeInfo: async (req, res, next) => {
    const id = req.params.id;
    const update = req.body;
    try {
      const result = await Bike.findByIdAndUpdate(id, update);
      if (!result) {
        throw createError(404, "Student with this id does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(404, "Student with this id does not exist."));
        return;
      }
      next(error);
    }
  },
  deleteBikeInfo: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Bike.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Student with this id does not exist.");
      }
      res.send("Student Deleted Succesfully.");
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(404, "Student with this id does not exist."));
        return;
      }
      next(error);
    }
  },
};
