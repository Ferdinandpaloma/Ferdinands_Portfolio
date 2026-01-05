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

    // Car physics state
    let x = tx,
      y = ty;
    let vx = 0,
      vy = 0;

    // Rotation
    let angle = 0;
    let angVel = 0;

    // Nose anchoring measurement
    let carHalfH = 0;

    // Tuning (Cursor Drifter feel)
    const followStrength = 0.1; // lower = more drift
    const damping = 0.8;
    const rotStrength = 0.15;
    const rotDamping = 0.75;

    // Cursor should touch the nose, not center
    const nosePadding = 6; // tweak this 0–20

    const updateSize = () => {
      const r = car.getBoundingClientRect();
      carHalfH = r.height / 2;
    };

    const normalizeAngle = (a) => {
      a = (a + Math.PI) % (Math.PI * 2);
      if (a < 0) a += Math.PI * 2;
      return a - Math.PI;
    };

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    // Ensure we can compute height for the nose offset
    const onImgLoad = () => updateSize();
    car.addEventListener("load", onImgLoad);

    updateSize();
    window.addEventListener("resize", updateSize);
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;

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
        const diff = normalizeAngle(targetAngle - angle);

        angVel = (angVel + diff * rotStrength) * rotDamping;
        angle += angVel;
      }

      // Your car PNG faces UP; atan2=0 faces RIGHT -> +90°
      const deg = angle * 180 / Math.PI + 90;

      // Push car backwards so the NOSE hits the cursor
      const noseOffset = Math.max(0, carHalfH - nosePadding);

      car.style.transform =
        `translate(${x}px, ${y}px) translate(-50%, -50%) ` +
        `rotate(${deg}deg) translate(0px, ${noseOffset}px)`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", updateSize);
      car.removeEventListener("load", onImgLoad);
    };
  }, []);

  return (
    <img
      ref={carRef}
      src="/car.png"
      alt="cursor car"
      className="fixed top-0 left-0 w-[80px] pointer-events-none z-[9999] drop-shadow-xl"
    />
  );
}
