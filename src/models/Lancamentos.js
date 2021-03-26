class Lancamentos ({
  name: { type: String },
  exercises: [{
    repetitions: { type: Number },
    weight: { type: Number },
    duration: { type: Number },
    observation: { type: String },
  }],
},
{
  timestamps: true,
});

