module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
  });
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
  });
  const Roles = mongoose.model("roles", schema);
  return Roles;
};
