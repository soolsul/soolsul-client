import { UserType } from "@lib/types";
import Property from "@lib/utils/Properties";
import { useCallback, useEffect, useState } from "react";

type MenuCoordsType = {
  top: number;
  clientYTemp: number;
  direction: "up" | "down";
};

function useBottomMenu() {
  const DEFAULT_POSITION = -85;

  const [isActive, setIsActive] = useState(false);
  const [transition, setTransition] = useState(0);
  const [menuCoords, setMenuCoords] = useState<MenuCoordsType>({
    top: DEFAULT_POSITION,
    clientYTemp: 0,
    direction: "up",
  });

  const handleEndTouch = useCallback(() => {
    setIsActive(false);
    setTransition(500);
    if (menuCoords.direction === "down") {
      setMenuCoords({ direction: "up", clientYTemp: -9999, top: DEFAULT_POSITION });
    } else {
      setMenuCoords({ direction: "down", clientYTemp: 9999, top: -document.body.scrollHeight / 2 });
    }
  }, [menuCoords.direction]);

  const onMouseDown = () => {
    setIsActive(true);
    setTransition(0);
  };

  const setPosition = (position: number, clientY: number) => {
    const direction = menuCoords.clientYTemp < clientY ? "down" : "up";
    const clientYTemp = clientY;
    let top = DEFAULT_POSITION;
    if (position >= DEFAULT_POSITION) {
      top = DEFAULT_POSITION;
    } else if (position < -document.body.scrollHeight / 2) {
      top = -document.body.scrollHeight / 2;
    } else {
      top = position;
    }
    setMenuCoords({
      direction,
      clientYTemp,
      top,
    });
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isActive) return;
    const position = e.clientY - document.body.scrollHeight;
    setPosition(position, e.clientY);
  };

  const onTouchMove = (e: globalThis.TouchEvent) => {
    if (!isActive) return;
    const position = e.touches[0].clientY - document.body.scrollHeight;
    setPosition(position, e.touches[0].clientY);
  };

  useEffect(() => {
    if (!isActive) return;
    Property.userInfo.isWeb && document.addEventListener("mouseup", handleEndTouch);
    Property.userInfo.isMobile && document.addEventListener("touchend", handleEndTouch);
    return () => {
      Property.userInfo.isWeb && document.removeEventListener("mouseup", handleEndTouch);
      Property.userInfo.isMobile && document.removeEventListener("touchend", handleEndTouch);
    };
  }, [handleEndTouch]);

  useEffect(() => {
    if (isActive) {
      Property.userInfo.isWeb && document.addEventListener("mousemove", onMouseMove);
      Property.userInfo.isMobile && document.addEventListener("touchmove", onTouchMove);
      return () => {
        Property.userInfo.isWeb && document.removeEventListener("mousemove", onMouseMove);
        Property.userInfo.isMobile && document.removeEventListener("touchmove", onTouchMove);
      };
    }
  }, [isActive, menuCoords.clientYTemp]);

  return { menuCoords, transition, handleStartTouch: onMouseDown };
}

export default useBottomMenu;
