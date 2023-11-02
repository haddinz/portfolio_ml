/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, RefObject  } from "react";

type Coords = {
  x: number;
  y: number;
};

export default function useHover(ref: RefObject<HTMLDivElement>, { x = 0, y = 0, z = 0 }) {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const mouseMoveHandler = (event: any) => {
    const { offsetWidth: width, offsetHeight: height } = ref.current!;
    const { clientX, clientY } = event;

    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;

    setCoords({ x, y });
  };

  const mouseEnterHandler = () => {
    setIsHovering(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const { current } = ref;

    if (current) {
      current.addEventListener("mousemove", mouseMoveHandler);
      current.addEventListener("mouseenter", mouseEnterHandler);
      current.addEventListener("mouseleave", mouseLeaveHandler);
    }

    return () => {
      current!.removeEventListener("mousemove", mouseMoveHandler);
      current!.removeEventListener("mouseenter", mouseEnterHandler);
      current!.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, [mouseMoveHandler, ref]);

  const { x: xCoords, y: yCoords } = coords;
  const xTransform = isHovering ? xCoords * x : 0;
  const yTransform = isHovering ? yCoords * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) translateZ(${zTransform}px) ease-out`;
  const transition = isHovering ? `all 0.3s ease-out` : "";

  return { transform, transition };
}
