import React from "react";
import Question from "./question";
import "./questions.css";

function Questions() {
  return (
    <section id="questions" className="bg-danger text-dark p-5 ">
      <div className="container g-4">
        <h1 className="text-center fw-bold mb-4">Frequently Asked Questions</h1>
        <Question
          title="What is Netflix?"
          descOne="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
          descTwo="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          target="#question-one"
          id="question-one"
        />
        <Question
          title="How much does Netflix cost?"
          descOne="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₪32.90 to ₪60.90 a month. No extra costs, no contracts."
          descTwo=""
          target="#question-two"
          id="question-two"
        />
        <Question
          title="Where can I watch?"
          descOne="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          descTwo="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          target="#question-three"
          id="question-three"
        />
        <Question
          title="How do I cancel?"
          descOne="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          descTwo=""
          target="#question-four"
          id="question-four"
        />
        <Question
          title="What can I watch on Netflix?"
          descOne="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          descTwo=""
          target="#question-five"
          id="question-five"
        />
        <Question
          title="Is Netflix good for kids?"
          descOne="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
          descTwo="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
          target="#question-six"
          id="question-six"
        />
      </div>
    </section>
  );
}

export default Questions;
