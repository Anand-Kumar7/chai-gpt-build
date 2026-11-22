//after
import { createOpenAI } from "@ai-sdk/openai";

const gemini = createOpenAI({
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    apiKey: process.env.GEMINI_API_KEY,
});

export const DEFAULT_CHAT_MODEL = "gemini-3.5-flash-lite";

export function getChatModel(modelId?: string | null) {
    // Must use .chat() so it uses /chat/completions instead of OpenAI's /responses API
    return gemini.chat(modelId || DEFAULT_CHAT_MODEL);
}
   //before
// import { openai } from "@ai-sdk/openai";

// /** Default OpenAI model used when a conversation has no model override. */
// export const DEFAULT_CHAT_MODEL = "gpt-4o-mini";

// /**
//  * Returns an OpenAI language model instance for chat completions.
//  *
//  * @param modelId - Optional model identifier; falls back to {@link DEFAULT_CHAT_MODEL}.
//  */
// export function getChatModel(modelId?: string | null) {
//     return openai(modelId || DEFAULT_CHAT_MODEL)
// }