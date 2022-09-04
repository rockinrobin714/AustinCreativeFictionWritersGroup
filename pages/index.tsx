import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "./hooks/useMediaQuery";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div>
      <Head>
        <title>Austin Creative Fiction Writers Group</title>
        <meta
          name="description"
          content="A writing critique group based in Austin for fiction writers of all skill levels"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <Image
            src="/logo_transparent.png"
            alt="Austin Creative Fiction Writers logo"
            width={isDesktop ? 350 : 250}
            height={isDesktop ? 350 : 250}
          />
        </header>
        <section className={styles.info}>
          <p className={styles.bold}>
            👋 Welcome to Austin Creative Fiction Writers Group
          </p>
          <p>We are a writing critique group based in Austin.</p>
          <p>
            We meet up every other Wednesday night and spend about two hours
            critiquing each others fictional short stories and novels.
          </p>
          <p>
            Each meeting, we review up to three pieces of fiction approximately 5,000
            words each submitted roughly five days before the meeting.
          </p>
        </section>
        <section className={styles.faq}>
          <p className={styles.bold}>🙋 FAQ</p>
          <div className={styles.faqContainer}>
            <div className={styles.faqColumn}>
              <p className={styles.faqQuestion}>✍️ How do I join?</p>
              <p>
                Visit{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://groups.io/g/AustinCreativeFictionWriters"
                >
                  our groups.io page
                </a>{" "}
                to see if there&apos;s currently room in the group or if there
                will be soon.
              </p>
              <p className={styles.faqQuestion}>
                ✍️ Do I have to give critiques on my first meeting?
              </p>
              <p>
                If you feel more comfortable observing on your first meeting,
                that&apos;s ok with us.
              </p>
              <p className={styles.faqQuestion}>
                ✍️ I&apos;ve never critiqued other writers&apos; work before and
                I&apos;m probably not very good at it.
              </p>
              <p>
                We believe critiquing is as important a part of our group as the
                writing. If you come into the group, you&apos;ll get better at
                it. We find virtually everybody has important things to say that
                shine new light on a writer&apos;s understanding of their work.
              </p>
              <p className={styles.faqQuestion}>
                ✍️ What kind of critiques am I expected to give?
              </p>
              <p>
                We follow the Milford Style of workshopping and recommend
                reviewing{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://cascadewriters.com/milford-style-workshopping/"
                >
                  this
                </a>{" "}
                so you know what to expect.
              </p>
              <p className={styles.faqQuestion}>
                ✍️ What if I don&apos;t like your critiques?
              </p>
              <p>You get a refund on the $0 you paid us.</p>
              <p className={styles.faqQuestion}>
                ✍️ I&apos;m writing fantasy / romance / sci-fi / Inspector
                Gadget fan fiction, can I submit?
              </p>
              <p>
                As long as it&apos;s fiction, go for it. We don&apos;t claim to
                be genre experts though*.
              </p>
              <p style={{ fontSize: "12px" }}>
                *Except in Inspector Gadget fan fiction
              </p>
            </div>
            <div className={styles.faqColumn}>
              <p className={styles.faqQuestion}>
                ✍️ I&apos;m a complete beginner. Can I still join?
              </p>
              <p>We welcome all skill levels.</p>
              <p className={styles.faqQuestion}>✍️ will u fix my grammer?</p>
              <p>Nope.</p>
              <p className={styles.faqQuestion}>
                ✍️ But seriously, my grammar sucks. I didn't even notice grammar was misspelled in the previous question.
              </p>
              <p>
                A typo here and there is fine but your submission should be
                readable. Excessive errors will detract from the story. If you
                really struggle with grammar, try using one of the many{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://prowritingaid.com/grammar-checker"
                >
                  free tools online
                </a>{" "}
                to help with the basics.
              </p>
              <p className={styles.faqQuestion}>
                ✍️ Why only 5,000 words? I&apos;m writing a 540,000 word sequel
                to Infinite Jest.
              </p>
              <p>5,000 words is short enough to read in one sitting.</p>
              <p className={styles.faqQuestion}>
                ✍️ What if I want to submit something in the middle of my novel?
              </p>
              <p>
                That&apos;s fine. We&apos;d appreciate a short summary of
                what&apos;s happened up to that point to give us the relevant
                context needed to critique.
              </p>
              <p className={styles.faqQuestion}>
                ✍️ I have questions about the group. How can I get answers?
              </p>
              <p>
                Visit{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://groups.io/g/AustinCreativeFictionWriters"
                >
                  our groups.io page
                </a>
                . You&apos;ll find a place there to do that and we want to hear
                your questions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>
          Copyright &copy; {new Date().getFullYear()} Austin Creative Fiction
          Writers
        </p>
      </footer>
    </div>
  );
};

export default Home;
