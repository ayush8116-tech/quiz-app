import { createFragment, ELEMENT } from "./generate_fragment.js";

const { FORM, LEGEND, FIELDSET, DIV, LABEL, INPUT } = ELEMENT;
const cls = (className) => ({ class : className })

const createOption = (optionNum) => {
  return [
            DIV,
            cls("option"),
            [
              [
                LABEL,
                { for : `option-${optionNum}` },
                `option ${optionNum}`
              ],
              [
                INPUT, 
                { type : "radio", name : "option", value : `option-${optionNum}` },
                ""
              ],
            ]
          ]
}

window.onload = () => {
  const main = document.querySelector("section");

  const formFragment = [ 
    FORM,
    cls("question-box"),
     [
      [
        FIELDSET,
        cls("question-field"),
        [
          [
            LEGEND,
            cls("question"),
            "Question 1"
          ],
          createOption(1),
          createOption(2),
          createOption(3),
          createOption(4),
        ]
      ]
    ]
    ];

  const form = createFragment(formFragment); 
  main.appendChild(form);
};
