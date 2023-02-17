import { useState } from "react";
// import { chatgpt } from '@/services/ant-design-pro/api'
import { chatgpt } from '@/services/socialapi/api'

const ChatGpt = () => {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { choices } = await chatgpt({
                prompt: input,
                max_tokens: 100,
                temperature: 0.5,
                n: 1,
                stop: "\n",
            }) as any
            console.log('choices-------:>', choices)
            setOutput(choices[0].text);
        } catch (error) {
            console.error(error);
            // setOutput("Sorry, something went wrong.");
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="input">Input:</label>
                <input type="text" id="input" value={input} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
            <p>Output: {output}</p>
        </div>
    );
};

export default ChatGpt;
