"use client";

import Countdown from "./components/countdown/countdown";
import Background from "./components/background/background";
import moment from "moment";
import { useState, useEffect } from "react";

interface VacationProps {
  name: string;
  date: string;
  isOffDay: boolean;
}

export default function PageVacatoinCountdown() {
  const [date, setDate] = useState("");
  const [countDown, setCountDown] = useState(0);

  function handleGetDate() {
    // setDate(moment().format("YYYY.MM.DD HH:mm"));
    setDate(moment().format("YYYY.MM.DD"));
  }

  function handleGetCountdown() {
    fetch(
      "https://raw.githubusercontent.com/NateScarlet/holiday-cn/master/2024.json"
    ) // 替换为你的API地址
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        const vacations: VacationProps[] = data.days;
        function isOffDay(target: moment.Moment) {
          // Check vacation
          for (let i = 0; i < vacations.length; i++) {
            const vacation = moment(vacations[i].date);
            const difference = vacation.diff(target, "days");
            if (difference === 0 && vacations[i].isOffDay) {
              return true;
            }
          }
          // If not, check weekend
          return target.day() === 0 || target.day() === 6;
        }

        function getCountdown() {
          const isTodayOff = isOffDay(moment());
          let newDay = moment();
          while (true) {
            newDay.add(1, "days");
            const isNewDayOff = isOffDay(newDay);
            if (isTodayOff && !isNewDayOff) {
              return moment().diff(newDay, "days");
            }
            if (!isTodayOff && isNewDayOff) {
              return newDay.diff(moment(), "days");
            }
          }
        }

        // console.log(getCountdown());
        setCountDown(getCountdown());
        // setCountDown(9);
      });
  }

  useEffect(() => {
    handleGetCountdown();
    handleGetDate();

    // const timerId = setInterval(() => {
    //   handleGetCountdown();
    //   handleGetDate();
    // }, 1000);

    // return () => {
    //   clearInterval(timerId);
    // };
  }, []);

  return (
    <main>
      <Background>
        <Countdown date={date} countDown={countDown}></Countdown>
      </Background>
    </main>
  );
}