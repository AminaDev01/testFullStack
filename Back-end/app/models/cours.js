module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
      unique: true,
    },
  });
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
  });
  const Cours = mongoose.model("cours", schema);
  return Cours;
};
