import React from 'react'
import './styles.css'
import TypeIt from "typeit-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import image1 from '../../assets/image1.jpg'
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

const images = [image1, image2, image3, image4];

function Home() {

    const carrosel = useRef();
    const [width, setWidth] = useState(0);

    const SuperStrong = ({ children }) => {
        return <strong style={{ fontSize: "3rem" }}>{children}</strong>;
      };

      useEffect(() => {
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
    }, []);

  return (
    <>
    <div className="container">
        <div className="containerText">
        <h1 className="title">
        My name is <span>Yudi Kojima.</span> <br />
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
    <div className='containerImage'>
    <img src="https://avatars.githubusercontent.com/u/118221566?v=4" alt="profile"/>
    </div>
    </div>
    <div className='titleProject'>
        <h1>
        <s>Spoiler</s>
        </h1>
        <span>drag to the side</span>
    </div>
    <div className="corousel">
            <motion.div
                ref={carrosel}
                className="carrosel"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {images.map((image) => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}

export default Home