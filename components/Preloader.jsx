"use client";
import { easeInOut, easeOut, motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const transition = { duration: 4, yoyo: Infinity, ease: "easeIn" };
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const exitAnimation = async () => {
      await animate(
        scope.current,
        {
          opacity: 0,
          ease: easeOut,
        },
        {
          duration: 0.75,
        }
      );
    };

    setTimeout(() => {
      exitAnimation();
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      scope.current.style.display = "none";
    }, 3000);
  });

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 bg-bgColor w-screen h-screen overflow-hidden flex justify-center items-center px-5"
      ref={scope}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/motion.svg"
        version="1.1"
        width="1000"
        height="161"
        viewBox="0 0 1000 161"
      >
        <g transform="matrix(1,0,0,1,-0.6060602654132481,0.17646078708929736)">
          <motion.svg
            viewBox="0 0 396 64"
            data-background-color="#0b022d"
            preserveAspectRatio="xMidYMid meet"
            height="161"
            width="1000"
          >
            <g
              id="tight-bounds"
              transform="matrix(1,0,0,1,0.24000013489637695,-0.07014482388700571)"
            >
              <motion.svg
                viewBox="0 0 395.52 64.14028964777401"
                height="64.14028964777401"
                width="395.52"
              >
                <g>
                  <motion.svg
                    viewBox="0 0 395.52 64.14028964777401"
                    height="64.14028964777401"
                    width="395.52"
                  >
                    <g>
                      <motion.svg
                        viewBox="0 0 395.52 64.14028964777401"
                        height="64.14028964777401"
                        width="395.52"
                      >
                        <g id="textblocktransform">
                          <motion.svg
                            viewBox="0 0 395.52 64.14028964777401"
                            height="64.14028964777401"
                            width="395.52"
                            id="textblock"
                          >
                            <g>
                              <motion.svg
                                viewBox="0 0 395.52 64.14028964777401"
                                height="64.14028964777401"
                                width="395.52"
                              >
                                <g transform="matrix(1,0,0,1,0,0)">
                                  <motion.svg
                                    width="395.52"
                                    viewBox="7.800000190734863 -41.54999923706055 279.6200256347656 45.349998474121094"
                                    height="64.14028964777401"
                                    data-palette-color="#f7fff7"
                                  >
                                    <motion.path
                                      d="M8.4-2.6q.75-1.65 1.8-4.25t2.2-5.63q1.15-3.02 2.35-6.2 1.2-3.17 2.25-6.02 1.05-2.85 1.82-5.1.78-2.25 1.13-3.45-3.15 1.3-5.4 3.95-2.25 2.65-3.4 6.65-1.15-.4-2.1-1.43-.95-1.02-1.25-2.57.5-2.3 1.88-4.2 1.37-1.9 3.47-3.25T18-36.18q2.75-.72 5.9-.72 4 0 7.35 1.17 3.35 1.18 5.75 3.28 2.4 2.1 3.75 5.05 1.35 2.95 1.35 6.55 0 4.9-1.8 9.35-1.8 4.45-4.87 7.85-3.08 3.4-7.13 5.43-4.05 2.02-8.5 2.02-4.1 0-7.02-1.62Q9.85.55 8.4-2.6Zm17.65-31.8q-2.5 0-4.75.7 2.2.8 3.65 1.68 1.45.87 2 1.37-.4.55-1.17 1.95-.78 1.4-1.8 3.4-1.03 2-2.18 4.37-1.15 2.38-2.25 4.88-2.85 6.35-4.12 10Q14.15-2.4 14.15-1q.7.25 1.7.35 1 .1 2.15.1 4.05 0 7.68-1.88 3.62-1.87 6.34-5.02 2.73-3.15 4.31-7.33 1.57-4.17 1.57-8.77 0-5.15-3.2-8-3.2-2.85-8.65-2.85ZM43.3-.85q0-1.75.35-4.13.35-2.37 1.02-5.07.68-2.7 1.6-5.65.93-2.95 2.08-5.9 1-2.65 2.32-5.35 1.33-2.7 2.88-5.3 1.55-2.6 3.22-4.95 1.68-2.35 3.38-4.3.8 0 1.72.2.93.2 1.8.52.88.33 1.6.78.73.45 1.18.9-3.75 3.85-6.75 7.77-3 3.93-4.75 7.38-.95 1.9-1.73 3.55-.77 1.65-1.42 3.27-.65 1.63-1.18 3.25-.52 1.63-.97 3.43Q59.25-22.7 63.9-22.7q1.3 0 2.8.85 1.5.85 2.65 2.3-1.55 1.7-3.2 4.1-1.65 2.4-3.03 4.82-1.37 2.43-2.25 4.5Q60-4.05 60-3.05q0 .5.15.67.15.18.65.18.75 0 1.2-.2.45-.2.55-.2.25.4.3.55.05.15.05.25 0 .2-.6.57-.6.38-1.43.75-.82.38-1.62.68-.8.3-1.2.3-.5 0-1-.27-.5-.28-.88-.73-.37-.45-.6-1-.22-.55-.22-1.15 0-.75.42-2.23.43-1.47 1.18-3.45.75-1.97 1.8-4.32Q59.8-15 61-17.45q0-.2-.2-.2-.15 0-.78.4-.62.4-1.17.8-1.8 1.35-3.63 3.32-1.82 1.98-3.55 4.33-1.72 2.35-3.25 4.97Q46.9-1.2 45.8 1.45q-.15.35-.45.65-.3.3-.5.3-.15 0-.43-.35-.27-.35-.5-.87Q43.7.65 43.5.1q-.2-.55-.2-.95ZM68-1q.25-1.45.87-3.83.63-2.37 1.48-5.05.85-2.67 1.8-5.37.95-2.7 1.85-4.85.65-1.55 1.15-2.43.5-.87 1.1-1.47.7.1 1.45.35.75.25 1.45.6t1.25.72q.55.38.85.73-1.35 1.6-2.38 3.65-1.02 2.05-2.07 5.25 2.7-2.4 4.77-4.6 2.08-2.2 3.88-4.9.3-.25 1.05-.25.7 0 1.35.22.65.23.9.63-.9 2.4-.9 4.75 0 2.2.65 3.3-.05.3-.68 1.15-.62.85-1.37 1.6-1.35-.7-2.4-1.93Q83-13.95 82.5-15.4q-2.35 1.65-4 3.22-1.65 1.58-2.83 3.5-1.17 1.93-2 4.43-.82 2.5-1.57 5.95-.45-.05-1.08-.32-.62-.28-1.25-.68-.62-.4-1.12-.85Q68.15-.6 68-1Zm34.94-.1q-.95-.8-1.27-2-.33-1.2-.33-2.05 0-1.05.25-1.8-.2 0-.9.8t-1.52 1.9q-.83 1.1-1.63 2.15-.8 1.05-1.2 1.55-.65.7-1.22 1.1-.58.4-.93.45-.8-.05-1.67-.32-.88-.28-1.65-.78-.78-.5-1.35-1.2-.58-.7-.78-1.6 0-1.4.08-2.3.07-.9.32-1.95.45-1.9 1.33-4.3.87-2.4 2.02-4.73 1.15-2.32 2.58-4.35 1.42-2.02 3.02-3.17.45 0 1.05.07.6.08 1.23.28.62.2 1.2.47.57.28.97.73-.45.5-2.27 3.35-1.83 2.85-4.08 8.2-.25.55-.6 1.6t-.7 2.2q-.35 1.15-.57 2.25-.23 1.1-.23 1.75 0 .4.13.6.12.2.22.3.75-.3 1.9-1.65 1.15-1.35 3.2-4.15.5-.7 1.18-1.6.67-.9 1.37-1.93.7-1.02 1.33-2.12.62-1.1 1.02-2.2.2-.6.53-1.43.32-.82.8-1.72.47-.9 1.1-1.83.62-.92 1.47-1.72.65 0 1.4.15.75.15 1.43.37.67.23 1.17.5.5.28.75.58-.9 2.2-2 4.35-1.1 2.15-2.05 4.22-.95 2.08-1.6 4.13-.65 2.05-.65 4 0 1.05.18 1.82.17.78.37 1.3.2.53.38.88.17.35.17.6 0 .05-.1.15-.05.05-.1.05-.35 0-.9-.15t-1.22-.42q-.68-.28-1.35-.63-.68-.35-1.28-.75Zm13.6-16.6q0-.9.13-1.7.12-.8.52-1.38.4-.57 1.1-.9.7-.32 1.85-.32.7 0 1.58.15.87.15 1.27.55-.2.85-.32 1.5-.13.65-.2 1.42-.08.78-.13 1.85-.05 1.08-.1 2.78-.1 3.4-.32 6.07-.23 2.68-1.03 5.33 0 .2.15.2.75-.55 1.7-1.6t2-2.38q1.05-1.32 2.1-2.82 1.05-1.5 1.95-2.95 1.2-2.1 2.65-5.25t2.4-6.75q.3 0 .78.12.47.13.95.3.47.18.85.38.37.2.52.35-.1 2.15-1.02 4.4-.93 2.25-2.23 4.35-1.3 2.1-2.75 3.95t-2.65 3.2q-2.4 2.8-4.82 5-2.43 2.2-5.78 4.25-1.3-.5-2.05-1.33-.75-.82-.75-1.72 0-.6.28-1.37.27-.78.62-2.01.35-1.22.63-3.07.27-1.85.27-4.7 0-1.65-.07-3.33-.08-1.67-.08-2.57Zm35.1 15.1q.75-1.65 1.8-4.25t2.2-5.63q1.15-3.02 2.35-6.2 1.2-3.17 2.25-6.02 1.05-2.85 1.82-5.1.78-2.25 1.13-3.45-3.15 1.3-5.4 3.95-2.25 2.65-3.4 6.65-1.15-.4-2.1-1.43-.95-1.02-1.25-2.57.5-2.3 1.87-4.2 1.38-1.9 3.48-3.25t4.85-2.08q2.75-.72 5.9-.72 4 0 7.35 1.17 3.35 1.18 5.75 3.28 2.4 2.1 3.75 5.05 1.35 2.95 1.35 6.55 0 4.9-1.8 9.35-1.8 4.45-4.88 7.85-3.07 3.4-7.12 5.43-4.05 2.02-8.5 2.02-4.1 0-7.03-1.62-2.92-1.63-4.37-4.78Zm17.65-31.8q-2.5 0-4.75.7 2.2.8 3.65 1.68 1.45.87 2 1.37-.4.55-1.18 1.95-.77 1.4-1.8 3.4-1.02 2-2.17 4.37-1.15 2.38-2.25 4.88-2.85 6.35-4.13 10-1.27 3.65-1.27 5.05.7.25 1.7.35 1 .1 2.15.1 4.05 0 7.67-1.88 3.63-1.87 6.35-5.02 2.73-3.15 4.3-7.33 1.58-4.17 1.58-8.77 0-5.15-3.2-8-3.2-2.85-8.65-2.85Zm35.59 13.7q-.2 3.1-1.1 5.32-.9 2.23-2.57 3.9-1.68 1.68-4.08 3.03-2.4 1.35-5.6 2.6 0 .3-.02.62-.03.33-.03.68 0 .65.1 1.35.1.7.35 1.3.25.6.7.97.45.38 1.15.38 1.35 0 2.65-.6 1.3-.6 2.48-1.48 1.17-.87 2.2-1.9 1.02-1.02 1.82-1.87.5.45.85.85-2.25 3-4.92 4.97-2.68 1.98-5.08 2.53-3.45-.4-5.37-2.53-1.93-2.12-1.93-5.12 0-2.05.58-4.18.57-2.12 1.6-4.1 1.02-1.97 2.4-3.72 1.37-1.75 2.95-3.05 1.57-1.3 3.25-2.05 1.67-.75 3.32-.75 2.3.3 4.3 2.85Zm-3.45 1.65q-1.35.2-2.8 1.1-1.45.9-2.72 2.4-1.28 1.5-2.33 3.5t-1.65 4.3q4-2 6.65-4.93 2.65-2.92 2.85-6.37Zm16.65-4.3q1 0 2.3.6 1.3.6 2.3 1.55-.25-2-.62-3.78-.38-1.77-1.1-3.67-.73-1.9-1.93-4.15-1.2-2.25-3-5.15.15-.45.68-1.05.52-.6 1.2-1.13.67-.52 1.4-.92.72-.4 1.37-.5 1.4 1.55 2.65 3.87 1.25 2.33 2.2 5 .95 2.68 1.48 5.53.52 2.85.52 5.45t-.57 5.35q-.58 2.75-1.6 5.37-1.03 2.63-2.38 4.98-1.35 2.35-2.92 4.2-1.58 1.85-3.28 3.03-1.7 1.17-3.4 1.47-3.45-.4-5.27-2.22-1.83-1.83-1.83-5.03 0-1.7.53-3.7.52-2 1.4-3.98.87-1.97 2.05-3.84 1.17-1.88 2.5-3.38 1.32-1.5 2.67-2.55 1.35-1.05 2.65-1.35ZM212.98.7q1.75-.6 3.5-2.65t3.15-4.83q1.4-2.77 2.28-5.95.87-3.17.87-6.12v-1.05q0-.2-.05-.4-1.2.5-2.55 1.7-1.35 1.2-2.7 2.77-1.35 1.58-2.55 3.43-1.2 1.85-2.15 3.7t-1.5 3.55q-.55 1.7-.55 3 0 2.5 2.25 2.85Zm15.8-1.55q0-1.75.35-4.13.35-2.37 1.02-5.07.68-2.7 1.6-5.65.93-2.95 2.08-5.9 1-2.65 2.32-5.35 1.33-2.7 2.88-5.3 1.55-2.6 3.22-4.95 1.68-2.35 3.38-4.3.8 0 1.72.2.93.2 1.8.52.88.33 1.6.78.73.45 1.18.9-3.75 3.85-6.75 7.77-3 3.93-4.75 7.38-.95 1.9-1.73 3.55-.77 1.65-1.42 3.27-.65 1.63-1.18 3.25-.52 1.63-.97 3.43 9.6-12.25 14.25-12.25 1.3 0 2.8.85 1.5.85 2.65 2.3-1.55 1.7-3.2 4.1-1.65 2.4-3.03 4.82-1.37 2.43-2.25 4.5-.87 2.08-.87 3.08 0 .5.15.67.15.18.65.18.75 0 1.2-.2.45-.2.55-.2.25.4.3.55.05.15.05.25 0 .2-.6.57-.6.38-1.43.75-.82.38-1.62.68-.8.3-1.2.3-.5 0-1-.27-.5-.28-.88-.73-.37-.45-.6-1-.22-.55-.22-1.15 0-.75.42-2.23.43-1.47 1.18-3.45.75-1.97 1.8-4.32 1.05-2.35 2.25-4.8 0-.2-.2-.2-.15 0-.78.4-.62.4-1.17.8-1.8 1.35-3.63 3.32-1.82 1.98-3.55 4.33-1.72 2.35-3.25 4.97-1.52 2.63-2.62 5.28-.15.35-.45.65-.3.3-.5.3-.15 0-.43-.35-.27-.35-.5-.87-.22-.53-.42-1.08-.2-.55-.2-.95Zm25.95-2.5q0-.45.07-1.13.08-.67.28-1.8.2-1.12.52-2.72.33-1.6.83-3.85.1-.5.45-1.6t.92-2.33q.58-1.22 1.4-2.37.83-1.15 1.98-1.7.85.2 2.25 1.02 1.4.83 2.4 2.28-1.15 1.3-1.93 2.6-.77 1.3-1.4 2.7-.62 1.4-1.15 2.9-.52 1.5-1.17 3.15-.55 1.4-1 2.87-.45 1.48-.5 2.58 0 .9-.03 1.28-.02.37-.27.37-.2 0-.8-.25-.6-.25-1.23-.78-.62-.52-1.12-1.32-.5-.8-.5-1.9Zm9.55-21.7q0-.3.15-.9-.25-.25-.43-.75-.17-.5-.17-.9 0-.45.12-1.23.13-.77.33-1.67.2-.9.5-1.88.3-.97.6-1.77.6 0 1.47.32.88.33 1.78.85.9.53 1.65 1.15.75.63 1.15 1.18-.55.55-1.45 1.52-.9.98-1.75 2.05-.85 1.08-1.55 2.03-.7.95-.9 1.35-.6-.1-1.05-.53-.45-.42-.45-.82Zm19.44 4.85q.5 0 1.18.17.67.18 1.22.45.55.28.93.58.37.3.37.55-1 2.1-1.85 4.22-.85 2.13-1.45 4.08-.6 1.95-.92 3.65-.33 1.7-.33 2.95 0 1.4.3 2.32.3.93 1 1.33-.6.4-1.55.65-.95.25-1.7.25-2.7 0-2.7-3.7 0-2.85 1.9-7.8-1 2.3-2.3 4.32-1.3 2.03-2.65 3.58-1.35 1.55-2.72 2.52-1.38.98-2.53 1.18-1.85-.1-3-1.78-1.15-1.67-1.15-4.27 0-2.8 1.2-5.9 1.2-3.1 3.08-5.75 1.87-2.65 4.07-4.43 2.2-1.77 4.25-1.87.5.15 1.13.6.62.45 1.2 1.05.57.6.97 1.22.4.63.45 1.08-2 .3-4.12 1.95-2.13 1.65-3.85 3.97-1.73 2.33-2.83 4.98-1.1 2.65-1.1 4.95 0 .95.7 1.2 1.45-.3 3.35-2.48 1.9-2.17 4.6-6.72.5-.9 1.13-2 .62-1.1 1.27-2.3.65-1.2 1.28-2.42.62-1.23 1.17-2.38Z"
                                      fill="transparent"
                                      strokeWidth="1"
                                      stroke="#f8efd4"
                                      strokeLinecap="round"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={transition}
                                    ></motion.path>
                                  </motion.svg>
                                </g>
                              </motion.svg>
                            </g>
                          </motion.svg>
                        </g>
                      </motion.svg>
                    </g>
                  </motion.svg>
                </g>
                <defs></defs>
              </motion.svg>
              <rect
                width="395.52"
                height="64.14028964777401"
                fill="none"
                stroke="none"
                visibility="hidden"
              ></rect>
            </g>
          </motion.svg>
        </g>
      </motion.svg>
    </motion.div>
  );
};

export default Preloader;
