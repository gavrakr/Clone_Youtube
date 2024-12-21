export const trending = (req, res) => res.send("Home Page Video");
export const see = (req, res) => {
  return res.send(`Watch video: #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit video");
};
export const search = (req, res) => res.send("Search video");
export const upload = (req, res) => res.send("Upload video");
export const deleteVideo = (req, res) => {
  return res.send("Delete video");
};
