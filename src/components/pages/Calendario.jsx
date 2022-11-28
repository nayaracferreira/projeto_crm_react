import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { AppFooter, AppHeader } from "../organisms";

export default function Calendario() {
  return (
    <div className="body">
      <AppHeader />
      Link
      <main>
        <Calendar action="/agenda" />
      </main>
      <AppFooter />
    </div>
  );
}
