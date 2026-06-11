"use client";
import { Mail } from "lucide-react";
import Image from "next/image";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22px" height="22px" fill="white">
    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22px" height="22px" fill="white">
    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22px" height="22px" fill="white">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.56V6.8a4.85 4.85 0 0 1-1.07-.11z" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22px" height="22px" fill="white">
    <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
  </svg>
);

const AmazonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22px" height="22px" fill="white">
    <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.814-2.107-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.384-2.294-.385-.581-1.134-.82-1.796-.82-1.219 0-2.308.625-2.574 1.92-.054.285-.261.567-.549.582l-3.061-.331c-.258-.056-.548-.266-.471-.66C5.55 1.78 8.418 1 11.018 1c1.317 0 3.038.351 4.077 1.35C16.418 3.607 16.306 5.35 16.306 7.224v5.139c0 1.548.641 2.228 1.245 3.065.211.296.258.649-.012.868-.676.566-1.878 1.614-2.537 2.204l-.007-.006" />
  </svg>
);

const BNIcon = () => (
  <span
    style={{
      fontSize: "11px",
      fontWeight: "bold",
      color: "white",
      letterSpacing: "0.5px",
      lineHeight: 1,
    }}
  >
    B&amp;N
  </span>
);

const socialLinks = [
  {
    name: "FACEBOOK",
    desc: "Stay connected",
    href: "https://bit.ly/4nJbszK",
    icon: <FacebookIcon />,
  },
  {
    name: "INSTAGRAM",
    desc: "Behind the scenes",
    href: "https://bit.ly/4wzW5O1",
    icon: <InstagramIcon />,
  },
  {
    name: "TIKTOK",
    desc: "Inspiration in seconds",
    href: "https://bit.ly/4wCQS7Z",
    icon: <TikTokIcon />,
  },
  {
    name: "X (TWITTER)",
    desc: "Thoughts & updates",
    href: "https://bit.ly/4nHeN27",
    icon: <XIcon />,
  },
  {
    name: "AMAZON",
    desc: "Books & more",
    href: "https://bit.ly/494qxFS",
    icon: <AmazonIcon />,
  },
  {
    name: "BARNES & NOBLE",
    desc: "Explore more",
    href: "https://bit.ly/4ddf3Cn",
    icon: <BNIcon />,
  },
  {
    name: "EMAIL / CONTACT",
    desc: "sjoh46@aol.com · sj99359865@gmail.com",
    href: "mailto:sj99359865@gmail.com",
    icon: <Mail size={22} color="white" />,
  },
];

const Divider = () => (
  <div className="flex items-center justify-center gap-2 my-1">
    <span style={{ background: "#D4AF37", height: "1px", flex: 1 }} />
    <span style={{ color: "#D4AF37", fontSize: "10px", letterSpacing: "3px", whiteSpace: "nowrap" }}>
      CONNECT WITH ME
    </span>
    <span style={{ background: "#D4AF37", height: "1px", flex: 1 }} />
  </div>
);

const Diamonds = () => (
  <div className="flex justify-center items-center gap-3 my-2">
    <span style={{ color: "#8B0000", fontSize: "18px", lineHeight: 1 }}>◆</span>
    <span style={{ color: "#8B0000", fontSize: "9px", lineHeight: 1 }}>◆</span>
    <span style={{ color: "#8B0000", fontSize: "18px", lineHeight: 1 }}>◆</span>
  </div>
);

export default function SocialMediaConnect() {
  return (
    <section
      style={{ backgroundColor: "#0d0d0d", padding: "5rem 1.5rem" }}
      className="flex justify-center"
    >
      <div
        className="w-full max-w-4xl overflow-hidden"
        style={{
          border: "2px solid #D4AF37",
          borderRadius: "6px",
          backgroundColor: "#111",
        }}
      >
        {/* Card body */}
        <div className="flex flex-col laptop:flex-row">
          {/* Left – QR Code */}
          <div
            className="laptop:w-2/5 flex flex-col items-center justify-between gap-6 p-8"
            style={{ borderBottom: "1px solid #2a2a2a" }}
          >
            {/* Top label */}
            <div className="text-center w-full">
              <p
                style={{ color: "#D4AF37", letterSpacing: "4px", fontSize: "13px" }}
                className="font-bold tracking-widest"
              >
                SCAN TO CONNECT
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span style={{ background: "#D4AF37", height: "1px", width: "35px", display: "inline-block" }} />
                <span style={{ color: "#777", fontSize: "10px", letterSpacing: "2px" }}>
                  ALL MY LINKS IN ONE PLACE
                </span>
                <span style={{ background: "#D4AF37", height: "1px", width: "35px", display: "inline-block" }} />
              </div>
            </div>

            {/* QR Code box */}
            <div
              style={{
                border: "3px solid #D4AF37",
                borderRadius: "8px",
                overflow: "hidden",
                width: "200px",
                height: "200px",
              }}
            >
              <Image
                src="/images/QR.JPG"
                alt="Scan to connect with Simeon Johnson"
                width={200}
                height={200}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* Bottom label */}
            <div className="text-center w-full">
              <div className="flex items-center justify-center gap-2">
                <span style={{ background: "#D4AF37", height: "1px", width: "25px", display: "inline-block" }} />
                <span style={{ color: "#D4AF37", fontSize: "10px", letterSpacing: "2px" }}>
                  ONE SCAN. ALL CONNECTED.
                </span>
                <span style={{ background: "#D4AF37", height: "1px", width: "25px", display: "inline-block" }} />
              </div>
              <p style={{ color: "#555", fontSize: "10px", letterSpacing: "1px" }} className="mt-1">
                THANK YOU FOR YOUR SUPPORT!
              </p>
            </div>
          </div>

          {/* Right – Social Links */}
          <div
            className="laptop:w-3/5 flex flex-col p-8"
            style={{ borderLeft: "1px solid #2a2a2a" }}
          >
            {/* Header */}
            <div className="text-center mb-4">
              <Diamonds />
              <h2
                style={{
                  color: "white",
                  fontFamily: "serif",
                  fontWeight: "700",
                  letterSpacing: "6px",
                  fontSize: "2rem",
                  lineHeight: 1.15,
                }}
              >
                SIMEON
                <br />
                JOHNSON
              </h2>
              <Diamonds />
              <p
                style={{ color: "white", letterSpacing: "3px", fontSize: "10px" }}
                className="mt-1"
              >
                TURNING PAGES, CHANGING LIVES
              </p>
              <Divider />
            </div>

            {/* Social links list */}
            <div className="flex flex-col gap-0">
              {socialLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-2 group transition-opacity hover:opacity-80"
                  style={{
                    borderBottom:
                      i < socialLinks.length - 1 ? "1px solid #1e1e1e" : "none",
                  }}
                >
                  <div
                    style={{
                      background: "#1a1a1a",
                      border: "1px solid #2e2e2e",
                      borderRadius: "50%",
                      width: "38px",
                      height: "38px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#D4AF37",
                        fontSize: "12px",
                        letterSpacing: "1.5px",
                        fontWeight: "700",
                        lineHeight: 1.2,
                      }}
                    >
                      {link.name}
                    </p>
                    <p style={{ color: "#666", fontSize: "11px" }}>{link.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{ backgroundColor: "#6B0000", padding: "10px 24px", textAlign: "center" }}
        >
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "5px",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            THE POWER WITHIN HIM
          </p>
        </div>
      </div>
    </section>
  );
}
