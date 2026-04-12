import React, { useRef, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./TransitionEffect.css";

gsap.registerPlugin(useGSAP);

const TransitionEffect = () => {
    const location = useLocation();
    const navType = useNavigationType();
    const containerRef = useRef(null);
    const shuttersRef = useRef([]);

    // Determine direction based on navigation type
    // PUSH = Forward (Top to Bottom)
    // POP = Backward (Bottom to Top)
    const isForward = navType !== "POP";

    // Helper to store refs in an array
    const addToRefs = (el) => {
        if (el && !shuttersRef.current.includes(el)) {
            shuttersRef.current.push(el);
        }
    };

    useGSAP(() => {
        // Reset/Slice refs array to ensure we only have 10
        shuttersRef.current = shuttersRef.current.slice(0, 10);

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.set(containerRef.current, { visibility: "hidden" });
            }
        });

        // 1. Initial State - Set vertical origins
        tl.set(containerRef.current, { visibility: "visible" })
          .set(shuttersRef.current, { 
                scaleY: 0, 
                scaleX: 1,
                transformOrigin: isForward ? "top" : "bottom" 
          });

        // 2. Vertical Shutter DROP (Staggered)
        tl.to(shuttersRef.current, {
            scaleY: 1,
            duration: 0.6,
            stagger: isForward ? 0.05 : -0.05,
            ease: "power2.inOut"
        })
        .to(".shutter-logo", {
            opacity: 0.5,
            duration: 0.3
        }, "-=0.4");

        // 3. Pause
        tl.to({}, { duration: 0.1 });

        // 4. Retract Shutters (Reverse vertical direction)
        tl.set(shuttersRef.current, { transformOrigin: isForward ? "bottom" : "top" })
          .to(".shutter-logo", {
            opacity: 0,
            duration: 0.2
        })
          .to(shuttersRef.current, {
            scaleY: 0,
            duration: 0.6,
            stagger: isForward ? 0.05 : -0.05,
            ease: "power2.inOut"
          }, "-=0.2");

    }, { dependencies: [location.pathname], scope: containerRef });

    return (
        <div ref={containerRef} className="transition-container">
            <div className="shutter-grid">
                {[...Array(10)].map((_, i) => (
                    <div 
                        key={i} 
                        ref={addToRefs} 
                        className="shutter-block"
                    ></div>
                ))}
            </div>
            <div className="shutter-logo">SOLAIRE AI OS</div>
        </div>
    );
};

export default TransitionEffect;
