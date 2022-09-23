let mantappu = {
  coba: {
    nama1: "ujang",
    ortu: "bustomi",
  },
};
const updateData = {
  coba: { ...mantappu.coba, nama1: "ramli", ortu: "buston" },
};
console.log(updateData);
