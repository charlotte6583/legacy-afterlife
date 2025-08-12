"use client";

import { useEffect, useState } from "react";
import "../../../styles/styles.css";

const sentences = [
  "Hello. I'm here to help you leave something behind—something that matters.",
  "A place where your memories, advice, and reflections are saved for your children.",
  "I’m here to make it simple. No pressure, no rush—just your voice, your story.",
  "You can speak, write, or just reflect. I’ll guide you one moment at a time.",
  "Let’s begin with what matters most to you.",
];

export default function IntroText() {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex].split("");
    setLetters([]); // 🔄 Reset letters before starting animation

    // Delay slightly before starting next sentence animation
    const startTyping = setTimeout(() => {
      setLetters(currentSentence);
    }, 100); // Small delay to trigger re-render

    const nextSentence = setTimeout(() => {
      if (sentenceIndex < sentences.length - 1) {
        setSentenceIndex((prev) => prev + 1);
      }
    }, currentSentence.length * 100 + 3000); // Adjust timing as needed

    return () => {
      clearTimeout(startTyping);
      clearTimeout(nextSentence);
    };
  }, [sentenceIndex]);

  return (
    <div className="intro-container">
      <p className="typewriter">
        {letters.map((char, i) => (
          <span
            key={i}
            className="fade-letter"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}
