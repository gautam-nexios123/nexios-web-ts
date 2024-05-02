export const pathDescriptions: any = {
  "/": "A custom Mobile and web app improvement enterprise focuses on creating tailor-made software program solutions that meet the specific wishes of companies and organizations. Our group of experienced builders makes use of ultra-modern technology and methodologies to layout and build splendid, user-friendly applications that deliver tangible outcomes. Contact us to discuss your requirements and learn the way we can help you achieve your desires.",
  "/about-us":
    "Powering Businesses with Innovative Technological Solutions, Since 2015. Welcome to Nexios Technologies. We are one of the reckoned Software Development Company in Surat, providing tailored solutions to our clients.",
  "/portfolio":
    "We work with your ideas. Explore our successful client products. Nexios Technologies is one of the reckoned Software Development Company in Surat, providing tailored solutions to our clients.",
  "/mobile-app-development":
    "Mobile application development is one of the most exciting and growing fields in the tech industry today. If you are looking for a way to increase your business & reach, consider developing a mobile app.",
  "/web-development":
    "Web application development is a growing industry, offering a unique way to improve your business. By creating a custom web application, you can increase efficiency and provide better user experience.",
  "/ui-ux":
    "UI/UX designers are responsible for creating the look and feel of a website or application, using a variety of software programs. Whether you are looking for a designer to create a new user interface.",
  "/internet-of-things":
    "The Internet of Things (IoT) is a rapidly growing field that involves connecting physical objects to the internet, allowing remote monitoring and control.",
  "/qa":
    "Quality assurance is a critical part of the software development process. It ensures that the software meets all the requirements specified by your clients or customers.",
  "/career":
    "Join Our Team! We attract creative minds committed to their dreams. Start a transcendent career by joining Nexios Technologies.",
  "/applynow":
    "Join Our Team! We attract creative minds committed to their dreams. Start a transcendent career by joining Nexios Technologies.",
  "/contact-us": "Contact Nexios Technologies.",
};

export const validateEmail = (email: string) => {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  return emailRegex.test(email);
};

const customDotStyles: any = {
  width: "10px",
  height: "10px",
  margin: "0 5px",
  borderRadius: "50%",
  display: "inline-block",
};

export const CustomDot = ({ onClick, ...rest } : any) => {
  const {
    onMove,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      className={active ? "bg-[#399EFD]" : "bg-white border border-[black]"}
      style={{ ...customDotStyles }}
      onClick={() => onClick()}
    />
  );
};

export const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};
