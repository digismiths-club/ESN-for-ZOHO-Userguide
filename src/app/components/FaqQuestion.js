"use client";

import { useState } from "react";

const questionsAndAnswers = [
    {
      question: "What is JavaScript?",
      answer: "JavaScript is a versatile programming language primarily used for creating interactive and dynamic web applications.",
      show: false
    },
    {
      question: "What is the difference between `let`, `const`, and `var`?",
      answer: "`var` is function-scoped, `let` is block-scoped and allows reassignment, while `const` is also block-scoped but does not allow reassignment.",
      show: false
    },
    {
      question: "What are JavaScript data types?",
      answer: "The primary data types in JavaScript are String, Number, Boolean, Null, Undefined, Object, and Symbol.",
      show: false
    },
    {
      question: "What is the purpose of the `this` keyword in JavaScript?",
      answer: "`this` refers to the context in which the current code is executed, such as the current object in a method.",
      show: false
    },
    {
      question: "What is the difference between `==` and `===` in JavaScript?",
      answer: "`==` checks for equality with type coercion, while `===` checks for strict equality without type coercion.",
      show: false
    }
  ];
  

export default function FaqQuestion() {

    const [showAns, setShowAns] = useState(false);

    let handleClick = (idx)=>{

        let oneQuestionAndAnswer = questionsAndAnswers.filter((val,index) => idx==index);
        
        if(oneQuestionAndAnswer[0].show == true){
            console.log(oneQuestionAndAnswer);
            oneQuestionAndAnswer[0].show = false
        }else{
            console.log(oneQuestionAndAnswer);
            oneQuestionAndAnswer[0].show = true ;
        }
            
        let settingShowToFalse = questionsAndAnswers.filter((val,index) => val.show==true && index!=idx);
        settingShowToFalse.map((val)=>val.show=false);

        setShowAns(!showAns);
    }



    return (
        questionsAndAnswers.map((val,idx)=>{
            return (
            <div key={idx}  className={`p-2 flex flex-col mb-4 w-[100%] justify-between gap-1
            ${val.show && "border shadow-lg rounded-lg"}`}>

            <div key={idx} className="flex justify-between">
                <h1 className="text-lg h-fit col-span-11">{val.question}</h1>
                <button id={idx} onClick={()=>handleClick(idx)} className="pt-1 hover:h-[1.5rem] flex flex-col col-start-auto h-[1.4rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </button>
            </div>

            {val.show  && <p className="col-span-12 text-md">{val.answer}</p>}
        </div>
        );
        })

    );
}