
import { GoogleGenerativeAI } from "@google/generative-ai";

const useGemini = async (prompt) => {

    const GEMINI_API_KEY = "AIzaSyCE5pnmgAlTGTEJCtWZtQyH6Zm-flHvCRw";
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const searchQuery = "Act as movie recommendations system and suggest some movies for the query: " + prompt + "only give me name of 5 movies, comma separated.";

    const result = await model.generateContent(searchQuery);
    // console.log(result.response.text());
    return result.response.text();
}

export default useGemini
