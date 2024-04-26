import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);

export const DownFall = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        delay: 0.2,
        duration: 1.5,
        stagger: 0.2,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const Swapl = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: 1000,
      },
      {
        x: 0,
        delay: 0.2,
        duration: 1.5,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const Zoomin = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 1.5,
        scale: 1,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const Swapr = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: -1000,
      },
      {
        x: 0,
        delay: 0.2,
        duration: 1.5,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const DYOYO = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: -25,
        transition: Infinity,
        opacity: 1,
      },
      {
        y: 5,
        duration: 2,
        ease: "Power5.out",
        yoyo: true,
        repeat: Infinity,
        opacity: 0,
        color: "black",
      }
    );
  }, [arr]);
};

export const GallaryUpward = (item, obs, delay) => {
  useEffect(() => {
    const el = item.current;
    // const trig = obs.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 0,
        width: "0%",
        height: "0%",
        scale: 0,
        borderRadius: "50px 50px 0px 0px",
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        scale: 1,
        rotate: 360,
        width: "100%",
        height: "100%",
        ease: "Power4.out",
        scrollTrigger: {
          trigger: "body",
          start: "bottom center",
          // scrub: 2,
          // markers: true,
        },
      }
    );
  }, [item, obs, delay]);
};

export const ScaleDown = (item, delay) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        scale: 1,
      },
      {
        duration: 2,
        ease: "sine",
        scale: 0,
        scrollTrigger: {
          trigger: "body",
          start: "bottom 45%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, [item, delay]);
};

export const DownToUp = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 125,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "Power5",
        opacity: 1,
        color: "aliceblue",
      }
    );
  }, [arr]);
};

export const DownToUp2 = (item, obs) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;
    gsap.fromTo(
      el,
      {
        y: 100,
        scale: 0.5,
      },
      {
        y: 0,
        duration: 1,
        scale: 1,
        ease: "Power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: trig,
          start: "top 80%",
          end: "bottom 100%",
          scrub: 2,
        },
      }
    );
  }, [item, obs]);
};

export const DownToUp3 = (item, obs) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;
    gsap.fromTo(
      el,
      {
        y: 50,
        scale: 0.5,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "Power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: trig,
          start: "top",
          end: "bottom 30%",
          scrub: 2,
          // markers:true
        },
      }
    );
  }, [item, obs]);
};

export const Spinner = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        rotate: 0,
      },
      {
        rotate: -360,
        duration: 10,
        ease: "back",
        repeat: Infinity,
      }
    );
  }, [arr]);
};

export const DownToUp4 = (item, obs) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;
    gsap.fromTo(
      el,
      {
        y: 300,
        scale: 0.5,
      },
      {
        y: 0,
        duration: 1,
        scale: 1,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top 45%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, [item, obs]);
};
