'use client'
import { Roboto } from "next/font/google";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import Congratulations from "./Congratulations";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export default function Dragon() {
  const [isShaking, setIsShaking] = useState(false);
  const [dragonLife,setDragonLife] = useState(100);

  function handleClick(e: MouseEvent<HTMLImageElement>) {
    setIsShaking(true);
    setDragonLife(dragonLife-10);
    setTimeout(() => setIsShaking(false), 500); // Shake for 500ms
    if (dragonLife <= 0) {
        return <Congratulations></Congratulations>
    }
}

  switch(dragonLife){
    default:
        return (
            <div>
              <p className={`${roboto.className}`}>
                but first. you need to defeat this dragon...
              </p>
              <p>{dragonLife}</p>
              <Image
                src="/dragon.webp"
                width={500}
                height={500}
                alt="Roar!!"
                onClick={(e) => handleClick(e)}
                className={isShaking ? "shake" : ""}
              ></Image>
            </div>
          );
        break;
    case 0:
        return <Congratulations/>
  }
}
