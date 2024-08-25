"use client";
import "animate.css";
import { useEffect } from "react";
import HeadingLarge from "@/components/install/HeadingLarge";
import HeadingMedium from "@/components/install/HeadingMedium";
import Paragraph from "@/components/Paragraph";

export default function Install() {
  useEffect(() => {
    document.title = "Install AdCense";
  }, []);

  return (
    <>
      <header className="space-y-4 animate__animated animate__fadeInLeft">
        <HeadingLarge>How to Install AdCense</HeadingLarge>
        <Paragraph>
          It is assumed that you have previously installed and are using Git on
          your device for this tutorial.{" "}
          <span>
            <a
              href="https://docs.github.com/en/get-started/getting-started-with-git"
              target="_blank"
              rel="noreferrer"
              className="underline font-medium hover:text-primary"
            >
              {`Here's how to get started if you don't already.`}
            </a>
          </span>
        </Paragraph>
      </header>

      <div className="animate__animated animate__fadeInUp animate__delay-05s">
        <HeadingMedium>1. Download the AdCense Extension </HeadingMedium>
        <Paragraph>
          To get started,{" "}
          <span className="font-medium underline hover:text-primary">
            <a
              href="https://github.com/psyofrelief/adcense-extension"
              target="_blank"
              rel="noreferrer"
            >
              click here
            </a>
          </span>{" "}
          and clone the repository to your machine.
        </Paragraph>
        <HeadingMedium>2. Extract the contents</HeadingMedium>

        <Paragraph>{`
          The files for the extension can then be accessed by extracting the
          contents of the downloaded zip file.
        `}</Paragraph>
        <HeadingMedium>3. Open Chrome Extension Page</HeadingMedium>

        <Paragraph>{`
          Now launch Google Chrome and go to the extension management page by
          entering "chrome://extensions/" in the address bar will take you to
          this page.
        `}</Paragraph>
        <HeadingMedium>4. Activate Developer Mode</HeadingMedium>

        <Paragraph>{`
          Turn on the "Developer Mode" option by toggling it on once you're on
          the extension management page.
        `}</Paragraph>
        <HeadingMedium>5. Load Unpacked Extension</HeadingMedium>

        <Paragraph>{`
          When you select "Load unpacked," a file explorer will open. Click "OK"
          to continue after selecting the folder from Step 2 that has the zip
          file's extracted contents.
        `}</Paragraph>
        <HeadingMedium>6. Choose Extension Folder</HeadingMedium>
        <Paragraph>{`When you select "Load unpacked," a file explorer will open. Click "OK"
          to continue after selecting the folder from Step 2 that has the zip
          file's extracted contents.
        `}</Paragraph>
        <HeadingMedium>7. Confirm and Install</HeadingMedium>
        <Paragraph>{`
          Chrome will process the selected folder and install the extension in
          Developer Mode. You will see the AdCense extension added to your list
          of installed extensions upon successful installation.
        `}</Paragraph>
      </div>
    </>
  );
}
