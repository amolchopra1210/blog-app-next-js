import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/amol.jpeg"
          width={300}
          height={300}
          alt="My profile Pic"
        />
      </div>
      <h1>Hi, I'm Amol Chopra</h1>
      <p>I blog about web development - especially React JS</p>
    </section>
  );
}

export default Hero;
