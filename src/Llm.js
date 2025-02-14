import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import React, { useState, useEffect, useContext } from 'react';
import { myContext } from './Interface';

function Llm() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const text = useContext(myContext);

  useEffect(() => {
    async function fetchData() {
      if (!text) return; // Avoid calling API when text is empty or undefined

      const model = new ChatGroq({
        model: "mixtral-8x7b-32768",
        temperature: 0,
        apiKey:'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' // Use env variable for the API key
      });

      const messages = [
        new SystemMessage("Give answers only on medical and provide only solutions for that treatment."),
        new HumanMessage(text),
      ];

      try {
        const result = await model.invoke(messages);
        if (result && result.text) {
          setResponse(result.text);  // Assuming 'text' contains the model's output
        }
      } catch (err) {
        setError("Error fetching data. Please try again.");
        console.error("Error:", err);
      }
    }

    fetchData();
  }, [text]); // Re-run the effect when text changes

  return (
    <div>
      <h1>LLM</h1>
      {error ? <p>{error}</p> : <p>Response: {response}</p>}
      <p>Context API text: {text}</p>
    </div>
  );
}

export default Llm;
