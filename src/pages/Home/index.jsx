import React from 'react'
import './styles.css'
import TypeIt from "typeit-react";

function Home() {

    const SuperStrong = ({ children }) => {
        return <strong style={{ fontSize: "3rem" }}>{children}</strong>;
      };

  return (
    <div className="container">
        <div className="containerText">
        <h1 className="title">
        My name is Yudi Kojima. <br />
        I'm a Front End Developer <br />
        <div className='titleWith'>
        With experience in . . .
        </div>
        <SuperStrong>
        <TypeIt
            options={{ loop: true }}
            className='titleAbility'
            getBeforeInit={(instance) => {
            instance.type("JavaScript").pause(750).delete().pause(750).type("HTML")
            .pause(750).delete().pause(750).type("CSS").pause(750).delete().pause(750).type("React")
            .pause(750).delete().pause(750).type("TypeScript").pause(750);
            return instance;
        }}
    />
        </SuperStrong>
    </h1>
    </div>
    </div>
  )
}

export default Home