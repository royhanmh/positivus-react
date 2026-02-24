import { useEffect, useState } from "react";
import SectionTitleComponent from "../components/SectionTitleComponent";
import TestimonialCardComponent from "../components/TestimonialCardComponent";

export default function TestimonialsLayout() {
  const feedbackData = [
    {
      text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
      name: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      text: `"Positivus transformed our search performance in just a few months. Their strategy is clear, reporting is transparent, and every campaign decision is backed by data."`,
      name: "Jane Doe",
      position: "Head of Growth at ABC Inc",
    },
    {
      text: `"From SEO to paid ads, the execution quality has been excellent. We finally have a partner that treats our targets like their own and communicates proactively."`,
      name: "Michael Brown",
      position: "CMO at GreenSpark",
    },
    {
      text: `"Their team helped us simplify our funnel and improve lead quality. Week by week we saw better conversion rates and stronger ROI across channels."`,
      name: "Emily Johnson",
      position: "Demand Gen Lead at NovaTech",
    },
    {
      text: `"Professional, fast, and deeply strategic. Positivus gave us a roadmap and delivered measurable results without the usual agency friction."`,
      name: "Brian Williams",
      position: "Founder at Atlas Studio",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 560;
  const cardGap = 36;
  const step = cardWidth + cardGap;
  const offset = -(activeIndex * step);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? feedbackData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === feedbackData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      setActiveIndex((prev) =>
        prev === feedbackData.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(autoplay);
  }, [feedbackData.length]);

  return (
    <>
      <SectionTitleComponent
        title="Testimonials"
        desc="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div
        style={{
          margin: "70px 85px",
          color: "#fff",
          backgroundColor: "#191a23",
          paddingTop: "84px",
          paddingBottom: "56px",
          borderRadius: "45px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: `${cardGap}px`,
              transform: `translateX(calc(50% - ${cardWidth / 2}px + ${offset}px))`,
              transition: "transform 0.45s ease",
              willChange: "transform",
            }}
          >
            {feedbackData.map((feedback, index) => (
              <TestimonialCardComponent
                key={index}
                props={feedback}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "130px",
          }}
        >
          <button
            onClick={handlePrevious}
            style={{
              border: "none",
              background: "transparent",
              color: "#f3f3f3",
              fontSize: "46px",
              lineHeight: "1",
              cursor: "pointer",
              opacity: 0.85,
            }}
            aria-label="Previous testimonial"
          >
            {"\u2190"}
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {feedbackData.map((_, index) => (
              <span
                key={index}
                style={{
                  color: index === activeIndex ? "#b9ff66" : "#f3f3f3",
                  fontSize: "20px",
                  lineHeight: "1",
                }}
              >
                {"\u2605"}
              </span>
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              border: "none",
              background: "transparent",
              color: "#f3f3f3",
              fontSize: "46px",
              lineHeight: "1",
              cursor: "pointer",
              opacity: 0.85,
            }}
            aria-label="Next testimonial"
          >
            {"\u2192"}
          </button>
        </div>
      </div>
    </>
  );
}
