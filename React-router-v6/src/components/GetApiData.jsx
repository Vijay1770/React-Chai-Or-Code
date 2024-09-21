export const GetApiData = async ( {params}) => {

   const id=params.movieID;

  try {
    const response = await fetch(
      //WE ARE USING .ENV FILE TO PROTECT OUR API KEY ...
      `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_Api_Key}&s=titanic&page=1` 
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
