import { useState } from 'react';
import OpenAI from "openai";
import styles from './Summary.module.less';
debugger
const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

export const Summary = () => {
  const [userData, setUserData] = useState({});
  main();
  return (
    <div className={styles.summaryContainer}>
    </div>
  )
}
