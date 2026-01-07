"use client";

import { useEffect, useRef } from "react";

export default function CarCursor() {
  const carRef = useRef(null);

  useEffect(() => {
    const car = carRef.current;
    if (!car) return;

    // Cursor target
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;

    // Car position
    let x = tx;
    let y = ty;

    // Car velocity
    let vx = 0;
    let vy = 0;

    // Car rotation
    let angle = 0;
    let angVel = 0;

    // Car height for nose offset
    let carHalfH = 0;

    // Tuning
    const followStrength = 0.01;
    const damping = 0.80;
    const rotStrength = 0.15;
    const rotDamping = 0.75;
    // Nose anchoring - adjusted for this specific car image
    const nosePadding = 35; // px: tweak if needed

    const updateCarSize = () => {
      const r = car.getBoundingClientRect();
      carHalfH = r.height / 2;
    };

    const normalizeAngle = (a) => {
      a = (a + Math.PI) % (Math.PI * 2);
      if (a < 0) a += Math.PI * 2;
      return a - Math.PI;
    };

    // Wait for image to load so we can measure height for nose offset
    const onImgLoad = () => updateCarSize();
    car.addEventListener("load", onImgLoad);

    updateCarSize();
    window.addEventListener("resize", updateCarSize);

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    let raf;

    const tick = () => {
      // Drift physics
      const ax = (tx - x) * followStrength;
      const ay = (ty - y) * followStrength;

      vx = (vx + ax) * damping;
      vy = (vy + ay) * damping;

      x += vx;
      y += vy;

      // Rotate toward velocity direction
      const speed = Math.hypot(vx, vy);
      if (speed > 0.05) {
        const targetAngle = Math.atan2(vy, vx);
        let diff = normalizeAngle(targetAngle - angle);

        angVel = (angVel + diff * rotStrength) * rotDamping;
        angle += angVel;
      }

      // IMPORTANT: Your image faces UP. atan2 "0°" faces RIGHT.
      // +90 aligns the car correctly.
      const deg = angle * (180 / Math.PI) + 90;

      // Nose offset: push car backward so the nose reaches the cursor.
      const noseOffset = Math.max(0, carHalfH - nosePadding);

      // Translate to cursor target, rotate, then move DOWN in local space (backwards),
      // because nose is at the TOP of the image.
      car.style.transform =
        `translate(${x}px, ${y}px) translate(-50%, -50%) ` +
        `rotate(${deg}deg) translate(0px, ${noseOffset}px)`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", updateCarSize);
      car.removeEventListener("load", onImgLoad);
    };
  }, []);

  return (
    <img
      ref={carRef}
      src="/car.png"
      alt="cursor car"
      className="fixed top-0 left-0 w-[80px] pointer-events-none z-[9999]"
      style={{
        transformOrigin: "50% 50%",
        willChange: "transform",
        filter: "drop-shadow(0 0 15px rgba(225, 6, 0, 0.7))",
      }}
    />
  );
}
