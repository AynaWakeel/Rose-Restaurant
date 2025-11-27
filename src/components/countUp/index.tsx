import { useEffect, useRef, useState } from "react"

interface countUpProps {
 end:number;
 duration?:number;
}

const CountUp:React.FC<countUpProps> = ({end , duration= 2000}) => {
    const [count, setCount] = useState<number>(0)
    const ref = useRef<HTMLDivElement | null>(null);
    const started = useRef(false);

    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * end);
            setCount(value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

    return (
        <>
            <h4 ref={ref} className="text-4xl font-bold text-zinc-500">
                {count}
            </h4>
        </>
    )
}

export default CountUp