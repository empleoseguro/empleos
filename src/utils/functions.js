export const getPostById = (data, postid) => {
    const filterList = data?.filter((item) => item.id.toString().includes(postid));
    return filterList
}

export const  readingTime = (data) =>  {
    const text = data
    const wpm = 255;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  }