import React from "react";
import classes from "./sectionAbout.module.scss";

const SectionAbout = () => {
  return (
    <section className={classes.sectionAbout}>
      <div className="container">
        <div className={classes.text}>
          <h1>About</h1>
          <p>
            Unsplash was born from the pain we had in finding great, usable
            imagery. And we weren’t alone. Which is why, today—millions of
            creators from around the world have downloaded over 2 billion
            Unsplash images to create presentations, artwork, mockups, and more.
          </p>
          <p>
            You don’t need to know someone, or have an agent, or have a name to
            contribute to Unsplash. We’re the place where creators meet their
            audience, where individuals become a community and where anyone can
            become a source for creativity. So whether you’re new to photography
            or consider yourself a pro—your images are welcome here.
          </p>
          <p>
            How we started? The concept was simple. Unsplash was born from the
            pain we had in finding great, usable imagery. Today, Unsplash is a
            platform fuelled by a community who give their work for free in
            support of the creatives everywhere. Without them, none of this
            would be possible
          </p>
        </div>
      </div>
    </section>
  );
};
export default SectionAbout;
