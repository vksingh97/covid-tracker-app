import axios from "axios";

const url = "https://www.mohfw.gov.in/data/datanew.json";

export const fetchData = async ()=>{
    try{
        const response = await axios.get(url);
        return response;
    }
    catch(err)
    {
        
    }
}