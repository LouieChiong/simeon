"use client";
import React from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const Divider = () => (
    <div className="section-divider" aria-hidden="true">
        <span className="section-divider-mark"></span>
    </div>
);

const timeline = [
    {
        period: "1946",
        title: "Birth & Early Childhood",
        facts: [
            ["Born", "July 14, 1946"],
            ["Place", "Jamaica"],
            ["Family", "Youngest of thirteen children"],
            ["Ages 3–5", "Approximately 1949–1951, Jamaica"],
        ],
        note: "As a young child, Simeon witnessed the death of his mother, an experience that became one of the significant hardships of his early life.",
    },
    {
        period: "1964",
        title: "Preschool / Kindergarten",
        facts: [
            ["School", "Ebenezer Primary School"],
            ["Location", "Manchester, Jamaica"],
        ],
        note: "Ebenezer Primary is a historic, multi-grade rural institution in the parish of Manchester.",
    },
    {
        period: "1995",
        title: "Junior High School",
        facts: [
            ["School", "American High School"],
            ["Location", "Chicago, Illinois"],
        ],
    },
    {
        period: "1976",
        title: "High School / Teenage Years",
        facts: [
            ["Program", "Radio and Television Technician"],
            ["School", "National Technical High School"],
        ],
        note: "Simeon endured numerous hardships during his teenage years and eventually reached a point of profound despair, coming to the brink of suicide. These experiences later became an important part of his testimony and spiritual transformation.",
    },
    {
        period: "1978",
        title: "College / Training",
        facts: [
            ["Institution", "National Technical Schools, Los Angeles, CA"],
            ["Course", "Cleveland Institute of Electronics"],
        ],
    },
    {
        period: "1966 – 1967",
        title: "Migration",
        facts: [
            ["To Canada", "1966, age 19 — from Jamaica"],
            ["To the United States", "1967, age 21 — from Canada"],
        ],
    },
    {
        period: "1989 – 2009",
        title: "Work & Career",
        facts: [
            ["Employer", "New York City Transit Authority"],
            ["Years", "January 1989 – February 2009 (20 years, 1 month)"],
            ["Role", "Assistant Elevator & Escalator Maintainer"],
        ],
    },
    {
        period: "1972",
        title: "Marriage & Family",
        facts: [
            ["Wife", "Dorothy Edward Johnson (born May 8, 1948)"],
            ["Married", "March 21, 1972"],
            ["Children", "Cassandra and Cheryl"],
        ],
    },
    {
        period: "The Author",
        title: "Writing & Publishing",
        note: "His life experiences ultimately became a major source of his writing and testimony. His book, A Myopic Life Resonated From the Brink of the Abyss (publication date to be confirmed), describes his journey from a difficult and seemingly directionless life, through profound hardship and despair, to a transformed life of faith and purpose.",
        list: {
            label: "Other works",
            items: [
                "You're a Worthwhile Person in More Ways Than a Million!",
                "ROMW Versus RAMB: Reveals God, Adam and Creation",
                "Unforgettable: Tribute to Our Heroes and Victims of 9/11",
            ],
        },
    },
    {
        period: "The Turning Point",
        title: "Major Life Transformation",
        highlight: true,
        note: "A central theme of Simeon Johnson's life is his transformation from what he describes as a “myopic life” into a “vanguard of change” life. Despite the loss of his mother as a child, severe hardships as a teenager, and reaching the brink of suicide, he describes his eventual transformation as a testimony to God's blessing and the power of the Cross. His story has become the foundation of his desire to testify to the world, using his life and writing to inspire and influence others.",
    },
    {
        period: "Today",
        title: "Present Day",
        highlight: true,
        facts: [
            ["Work", "Author, writer, and faith-centered advocate"],
            ["Accomplishment", "Turning personal hardship and transformation into written testimony and a broader message of hope, faith, and change"],
            ["Goal", "To continue sharing his testimony and influencing lives through his writing and message"],
        ],
    },
];

export default function TimelinePage() {
    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen h-auto relative" style={{ backgroundColor: "var(--cream)" }}>
            <Navigator />

            <section className="w-full max-w-screen-xl mt-32 mb-16 desktop:px-24 laptop:px-16 tablet:px-10 mobile:px-5">

                {/* Header */}
                <div className="relative w-full min-h-[260px] flex flex-col justify-center items-center text-center">
                    <Image
                        src="/images/Initial.png"
                        alt=""
                        width={200}
                        height={200}
                        className="absolute inset-0 m-auto z-0 opacity-80"
                    />
                    <div className="z-10 flex flex-col items-center">
                        <span className="section-eyebrow">The Journey</span>
                        <h1 className="name-title tablet:text-[50px] mobile:text-[34px] laptop:text-[56px] desktop:text-[56px] mt-2">
                            Life Timeline
                        </h1>
                        <span className="name-description font-bold text-xl mt-1">Simeon W. Johnson</span>
                        <small className="name-description font-normal text-lg">
                            From a myopic life to a vanguard of change
                        </small>
                    </div>
                </div>

                <Divider />

                {/* Timeline */}
                <div className="timeline">
                    {timeline.map((entry, idx) => (
                        <motion.div
                            key={entry.title}
                            className={`timeline-item${entry.highlight ? " timeline-item--highlight" : ""}`}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <span className="timeline-dot" aria-hidden="true"></span>
                            <article className="timeline-card">
                                <span className="section-eyebrow">Chapter {idx + 1}</span>
                                <div className="timeline-period">{entry.period}</div>
                                <h2 className="timeline-title">{entry.title}</h2>

                                {entry.facts && (
                                    <dl className="timeline-facts">
                                        {entry.facts.map(([label, value]) => (
                                            <React.Fragment key={label}>
                                                <dt>{label}</dt>
                                                <dd>{value}</dd>
                                            </React.Fragment>
                                        ))}
                                    </dl>
                                )}

                                {entry.note && <p className="timeline-note">{entry.note}</p>}

                                {entry.list && (
                                    <dl className="timeline-facts">
                                        <dt>{entry.list.label}</dt>
                                        <dd>
                                            <ul className="timeline-list">
                                                {entry.list.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </dd>
                                    </dl>
                                )}
                            </article>
                        </motion.div>
                    ))}
                </div>

                <Divider />

                {/* Closing */}
                <div className="flex flex-col w-full items-center">
                    <div className="mission-panel text-center">
                        <h3 className="book-title font-bold mobile:!text-[28px] tablet:!text-[42px] laptop:!text-[42px]">&quot;My Mission and Vision&quot;</h3>
                        <p className="qoutes indent-10 text-[22px] font-bold mt-2">
                            To promulgate the Good News Story around the World, changing lives in preparation for the Kingdom of God. Amen!
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
