export const getPostById = (data, postid) => {
    const filterList = data.filter((item) => item.id.toString().includes(postid));
    return filterList
}

export const pagination = (array, status) => {
    let newArray
    newArray = array.slice(status, status+5)

    return newArray
} 

export const  readingTime = (data) =>  {
    const text = data
    const wpm = 155;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time
  }