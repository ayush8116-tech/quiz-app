import { createFragment, ELEMENT } from "./generate_fragment.js";

const { FORM, LEGEND, FIELDSET, DIV, LABEL, INPUT } = ELEMENT;
const cls = (className) => ({ class: className });

const createOption = (optionName, optionNum) => {
  return [
    DIV,
    cls("option"),
    [
      INPUT,
      { type: "radio", name: "option", value: `option-${optionNum}` },
    ],
    [
      LABEL,
      { for: `option-${optionNum}` },
      optionName,
    ],
  ];
};

const quiz = {
  question: "1. Who is the current captain of Indian Cricket Team ?",
  options: [
    "Abhishek Sharma",
    "Rinku Singh",
    "Surya Kumar Yadav",
    "Virat Kohli",
  ],
};

window.onload = () => {
  const main = document.querySelector("#quiz-container");

  const formFragment = [
    FORM,
    cls("question-box"),
    [
      FIELDSET,
      cls("question-field"),
      [
        LEGEND,
        cls("question"),
        quiz.question,
      ],
      ...quiz.options.map((option, idx) => createOption(option, idx + 1)),
    ],
  ];

  const form = createFragment(formFragment);
  main.appendChild(form);
};
