import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! My name is <span className="purple"> Sakshi Goel </span>
            from <span className="purple"> India.</span>
            <br />I hold a Bachelor of Technology degree, and I'm always eager to learn and grow in my field.
            <br />
            <br />
            Aside from coding, I love to <span className="purple"> travel </span> and explore new places, experiencing different cultures and learning from the world around me. <span className="purple"> Gardening</span> is another activity that brings me joy, allowing me to connect with nature and nurture life in my own little corner of the world.
            <br />
            <br/>
            To keep myself physically and mentally fit, I make sure to hit the <span className="purple"> Gym</span> regularly and practice <span className="purple"> Yoga</span>. Both of these activities help me reduce stress, improve my focus, and maintain a healthy lifestyle.
          </p>
          

          <p style={{ color: "#cec082"  }}>
            "Every problem has a solution. Never Give up!"{" "}
          </p>
          <footer className="blockquote-footer">Sakshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
