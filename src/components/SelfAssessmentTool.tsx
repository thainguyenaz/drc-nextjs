"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  "Over the past two weeks, how often have you felt nervous, anxious, or on edge?",
  "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
  "How often do you have trouble falling asleep, staying asleep, or sleeping too much?",
  "How often do you feel fatigued or have little energy, even after adequate rest?",
  "How often do you have difficulty concentrating, making decisions, or remembering things?",
  "How often do you feel overwhelmed by everyday responsibilities or situations?",
  "How often do you use alcohol, drugs, or other substances to cope with stress, anxiety, or emotional pain?",
  "How often do you withdraw from friends, family, or activities you used to enjoy?",
  "How often do you experience intrusive thoughts, flashbacks, or memories of a distressing event?",
  "How often do you feel that your emotional state is significantly affecting your work, relationships, or daily functioning?",
];

const options = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

function getResult(score: number) {
  if (score <= 7) {
    return {
      level: "Minimal",
      color: "text-sage",
      bg: "bg-sage/10",
      message:
        "Based on your responses, your symptoms appear to be in the minimal range. This is encouraging, but it does not mean you should ignore how you feel. If you have concerns about your mental health or well-being, speaking with a professional can provide reassurance and early support.",
      recommendation:
        "If you are experiencing any distress, a brief conversation with a mental health professional can help you develop strategies to maintain your well-being and address concerns early.",
    };
  }
  if (score <= 14) {
    return {
      level: "Mild to Moderate",
      color: "text-gold",
      bg: "bg-gold/10",
      message:
        "Your responses suggest mild to moderate symptoms that may be affecting your quality of life. Many people experience these symptoms and benefit significantly from professional support. You do not need to wait until things get worse to seek help.",
      recommendation:
        "We recommend speaking with a mental health professional who can provide a thorough evaluation. Desert Recovery Centers offers free, confidential clinical assessments, call our admissions team to learn more about your options.",
    };
  }
  return {
    level: "Moderate to Severe",
    color: "text-red-600",
    bg: "bg-red-50",
    message:
      "Your responses indicate moderate to severe symptoms that are likely having a significant impact on your daily life, relationships, and functioning. These results suggest that professional support could make a meaningful difference.",
    recommendation:
      "We strongly recommend reaching out to a mental health professional as soon as possible. Desert Recovery Centers provides thorough mental health and dual diagnosis treatment in a supportive, luxury environment. Our admissions team is available 24/7, call us today for a free, confidential assessment.",
  };
}

export default function SelfAssessmentTool() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const score = answers.reduce((sum, a) => sum + a, 0);
  const result = getResult(score);
  const progress = ((currentQuestion + (showResults ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100">
        <motion.div
          className="h-full bg-gold"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="p-8 md:p-10">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-forest font-semibold mb-8 leading-relaxed">
                {questions[currentQuestion]}
              </h3>
              <div className="space-y-3">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-gold/60 hover:bg-gold/5 transition-all text-sm font-medium text-forest cursor-pointer"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                  Your Results
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-3 mb-2">
                  Assessment Complete
                </h3>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${result.bg} ${result.color} mt-2`}>
                  Symptom Level: {result.level}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-cream rounded-xl p-6">
                  <h4 className="font-semibold text-forest mb-2">What This Means</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{result.message}</p>
                </div>

                <div className="bg-cream rounded-xl p-6">
                  <h4 className="font-semibold text-forest mb-2">Our Recommendation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{result.recommendation}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="tel:+14809313617"
                    className="text-center bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    Call (480) 931-3617
                  </a>
                  <button
                    onClick={handleReset}
                    className="text-center border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-xs leading-relaxed">
                  This assessment is for informational purposes only and is not a medical diagnosis. Please consult a qualified healthcare professional for a thorough assessment of your mental health. If you are in immediate danger, call 988 or go to your nearest emergency room.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
