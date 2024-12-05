exports.calculateWaterUsage = (req, res) => {
 const { shower, toilet, dishwasher, washingMachine, gardening } = req.body;

 const totalDailyUsage =
  shower.duration * shower.flowRate * shower.frequency +
  toilet.waterPerFlush * toilet.frequency +
  dishwasher.waterPerCycle * dishwasher.frequency +
  washingMachine.waterPerCycle * washingMachine.frequency +
  gardening.waterPerSession * gardening.frequency;

 res.json({ totalDailyUsage });
};
