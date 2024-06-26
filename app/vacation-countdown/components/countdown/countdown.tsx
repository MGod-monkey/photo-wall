import localFont from "next/font/local";
import styles from "./styles.module.css";
import { Teko, Noto_Sans_SC } from "next/font/google";
import EarthLabelSvg from "./earth-label-svg/earth-label-svg";

const zhFont = localFont({
  src: "../../../../public/fonts/HarmonyOS_Sans_SC_Regular.ttf",
});
const enFont = Teko({ subsets: ["latin"] });

interface Props {
  location?: string;
  date?: string;
  countDown?: number;
}

export default function Countdown(props: Props) {
  const { location = "CHINA", date = "2077.3.7", countDown = 6 } = props;

  return (
    <div>
      {/* Hero */}
      {/* <div className={styles.hero + " " + enFont.className}>
        <EarthLabelSvg></EarthLabelSvg> 
        <div className={styles["bar"]}></div>
        <div className={styles["label"]}>
          <div>{date}</div>
          <div>{location}</div>
        </div>
      </div> */}

      {/* Tail */}
      <div className={styles["tail"] + " " + zhFont.className}>
        <div className={styles["bar"]}></div>
        <div className={styles["head-offset"]}>
          {countDown < 0 ? "距离节假日危机" : "距离节假日恢复"}
        </div>
        <div>
          还剩
          <span className={styles["countdown"]}>{Math.abs(countDown)}</span>天
        </div>
        <div className={enFont.className}>
          <div className={styles["en-font"]}>
            {countDown < 0 ? "VACATION DESTROY" : "VACATION RECOVERY"}
          </div>
          <div className={styles["en-font"]}>
            IN <span>{Math.abs(countDown)}</span> DAYS
          </div>
        </div>
      </div>
    </div>
  );
}
