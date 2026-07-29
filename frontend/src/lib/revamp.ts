import { api } from "./api";

export async function analyzeWebsite(url: string) {
  try{
      const response = await api.post("/analyze", {
    url,
  });

  return response.data;

  } catch(error){
    console.log(error)
  }

}