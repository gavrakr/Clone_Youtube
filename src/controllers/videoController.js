let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createAt: "2 minites ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createAt: "2 minites ago",
    views: 1,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createAt: "2 minites ago",
    views: 84,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
  }
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const search = (req, res) => res.send("Search video");
export const deleteVideo = (req, res) => {
  return res.send("Delete video");
};
