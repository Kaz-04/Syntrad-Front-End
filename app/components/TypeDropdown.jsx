"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const solutions = [
  "Automation & Control Systems",
  "Electrical & Electronic Engineering",
  "Electromechanical Systems",
  "Connected Infrastructure & IoT",
  "Energy & EV Infrastructure",
  "Bespoke Engineering",
];

const machineries = [
  "Coffee Machine Engineering",
  "Catering Equipment Engineering",
  "Fitness Equipment Engineering",
  "Sauna & Wellness Systems",
  "Cold Plunge & Water Systems",
  "PCB & Electronic Diagnostics",
  "Pumps, Motors & Drives",
  "Heritage & Precision Equipment",
  "Other Specialist Equipment",
];

const sectors = [
  "Leisure, Wellness & Fitness",
  "Hospitality & Catering",
  "Commercial & Industrial",
  "Premium Residential",
  "Specialist Technical Environments",
];

const defaultGroups = [solutions, machineries, sectors];

export const projectTypeOptions = defaultGroups.flat();

export default function TypeDropdown({
  value = "",
  onChange,
  name = "type",
  placeholder = "Select project type",
  required = false,
  groups = defaultGroups,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const rootRef = useRef(null);
  const uid = useId();

  const options = useMemo(
    () =>
      groups.flatMap((group, gi) =>
        group.map((o, i) => {
          const opt = typeof o === "string" ? { value: o, label: o } : o;
          return { ...opt, divider: gi > 0 && i === 0 };
        })
      ),
    [groups]
  );

  const selectedLabel = options.find((o) => o.value === value)?.label;
  const selectedIndex = options.findIndex((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    if (open && active >= 0) {
      document.getElementById(`${uid}-opt-${active}`)?.scrollIntoView({ block: "nearest" });
    }
  }, [active, open, uid]);

  const select = (optValue) => {

    onChange?.(optValue === value ? "" : optValue);
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActive(Math.max(selectedIndex, 0));
        return;
      }
      setActive((i) =>
        e.key === "ArrowDown" ? (i + 1) % options.length : (i - 1 + options.length) % options.length
      );
      return;
    }
    if (e.key === "Enter" && open && active >= 0) {
      e.preventDefault();
      select(options[active].value);
    }
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>

      <input
        tabIndex={-1}
        aria-hidden="true"
        name={name}
        value={value}
        onChange={() => {}}
        required={required}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />

      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${uid}-list`}
        onClick={() => {
          setOpen((o) => !o);
          setActive(Math.max(selectedIndex, 0));
        }}
        onKeyDown={onKeyDown}
        className="w-full flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-[#111111] px-3.5 py-1.5 text-left text-[13px] transition-colors focus:border-red-600/60 focus:outline-none"
      >
        <span className={selectedLabel ? "text-white" : "text-gray-600"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-red-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          id={`${uid}-list`}
          role="listbox"
          className="absolute z-30 mt-1 w-full max-h-72 overflow-y-auto rounded-md border border-white/10 bg-[#1c1c1c] shadow-xl"
        >
          {options.map(({ value: optValue, label, divider }, i) => {
            const selected = optValue === value;
            return (
              <li
                key={optValue}
                id={`${uid}-opt-${i}`}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActive(i)}
                onClick={() => select(optValue)}
                className={[
                  "flex cursor-pointer items-center justify-between gap-3 px-4 py-2 text-[13px]",
                  divider ? "border-t-2 border-black" : "",
                  i === active ? "bg-red-600/15" : "",
                  selected ? "text-red-500" : "text-gray-200",
                ].join(" ")}
              >
                {label}
                {selected && <Check size={14} className="shrink-0" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}