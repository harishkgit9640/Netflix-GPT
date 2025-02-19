
import OpenAI from "openai";
const useGPT = async () => {
    const OPENAI_KEY = "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"

    const openai = new OpenAI({
        apiKey: OPENAI_KEY,
        dangerouslyAllowBrowser: true,
    });
    const searchQuery = "Act as movie recommendations system and suggest some movies for the query: " + search + "only give me name of 5 movies, comma separated.";
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
            { "role": "user", "content": searchQuery },
        ],
    });
    console.log(completion.choices[0].message);
}