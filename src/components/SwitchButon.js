import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchButon({ enabled, setEnabled }) {
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${!enabled ? "bg-black" : "bg-white"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-11" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full dark:bg-black bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
