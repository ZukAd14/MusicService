class Songs {
  constructor(element){
    const thisSongs = this;

    thisSongs.data(element);
  }
  data(element){
    const thisSongs = this;

    thisSongs.getData = {
      id: element.id,
      title: element.title,
      author: element.author,
      filename: element.filename,
      categories: element.categories,
      ranking: element.ranking,
    };

    return thisSongs.getData;
  }
}

export default Songs;