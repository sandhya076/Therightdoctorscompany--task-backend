import Mongoose from "mongoose";
import Person from "./model.js";

export const getPerson = async (req, res) => {
  try {
    const Data = await Person.find();
    res.status(200).json(Data);
  } catch (error) {
    res.status(404).json(console.log(error.message));
  }
};

export const CreatePerson = async (req, res) => {
  const Data= req.body;
  const NewPerson = new Person(Data);
  try {
    await NewPerson.save();
    res.status(200).json(NewPerson);
  } catch (error) {
    res.status(404).json(console.log(error.message));
  }
};

export const UpdatePerson = async (req, res) => {
  const id = req.params.id;
  const Data = req.body;
  if (!Mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json(console.log("Person Not found with that Id"));
  } else {
    const updateperson = await Person.findByIdAndUpdate(id, {
      ...Data,
      id,
    });
    const temp = await Person.findById(id);
    res.status(200).json(temp);
  }
};

export const DeletePerson = async (req, res) => {
  const id = req.params.id;
  if (!Mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json(console.log("Person Not found with that Id"));
  } else {
    const deleteperson = await Person.findByIdAndRemove(id);
    res.send(200,"Person successfully Deleted");
  }
};