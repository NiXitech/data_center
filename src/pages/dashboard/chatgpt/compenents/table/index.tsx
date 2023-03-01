// import { useState } from 'react';
// import { chatgpt } from '@/services/ant-design-pro/api'
// import { chatgpt, bot } from '@/services/socialapi/api';
// import { chatgpt } from '@/services/http/api'

const ChatGpt = () => {
//   const [input, setInput] = useState<string>('');
//   const [output, setOutput] = useState<string>('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const reult = await bot();
//     console.log('嘿嘿嘿嘿嘿', reult);
    // try {
    //     const { choices } = await chatgpt({
    //         prompt: input,
    //         max_tokens: 100,
    //         temperature: 0.5,
    //         n: 1,
    //         stop: "\n",
    //     }) as any
    //     console.log('choices-------:>', choices)
    //     setOutput(choices[0].text);
    // } catch (error) {
    //     console.error(error);
    //     // setOutput("Sorry, something went wrong.");
    // }
//   };

  return (
    <div>
      {/* <form onSubmit={handleFormSubmit}>
        <label htmlFor="input">Input:</label>
        <input type="text" id="input" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <p>Output: {output}</p> */}
      <ul>
        <li>选择 电影摄影风格 8K 充满细节 输入input描述，生成接近真实照片风格</li>
        <li>input中含有敏感词会报错</li>
      </ul>
      <iframe src="https://baai-altdiffusion.hf.space" frameBorder="0" width="100%" height="1900px"> </iframe>
    </div>
  );
};

export default ChatGpt;
