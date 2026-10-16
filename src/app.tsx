import "@fontsource-variable/josefin-sans";
import { cn } from "cn";

import background from "./assets/bg-pattern-desktop.svg";
import arrow from "./assets/icon-arrow.svg";
import error from "./assets/icon-error.svg";
import logo from "./assets/logo.svg";
import heroDesktop from "./assets/hero-desktop.jpg";
import heroMobile from "./assets/hero-mobile.jpg";

export function App() {
  const style = {
    "text-red-500": "text-[hsl(0,93%,68%)]",
    "text-pink-400": "text-[hsl(0,36%,70%)]",
    "text-gray-900": "text-[hsl(0,6%,24%)]",
    "border-gray-900": "border-[hsl(0,6%,24%)]/30",
    button: "bg-linear-135 from-[hsl(0,80%,86%)] to-[hsl(0,74%,74%)]",
  };
  return (
    <main>
      <section className="hidden relative max-h-screen font-['Josefin_Sans_Variable'] lg:flex overflow-hidden">
        <img src={background} className="absolute top-0 w-full h-full z-1" />
        <div className="z-2 flex flex-col items-center justify-around basis-[50%] shrink-0 p-6">
          <div className="w-md">
            <img src={logo} className="w-50" />
          </div>
          <div className="max-w-md space-y-10">
            <div className="space-y-4">
              <p
                className={cn(
                  style["text-pink-400"],
                  "text-6xl tracking-[0.3em]",
                )}
                style={{ fontWeight: "300" }}
              >
                WE'RE
              </p>
              <p
                className={cn(
                  style["text-gray-900"],
                  "text-7xl tracking-[0.15em]",
                )}
                style={{ fontWeight: "600" }}
              >
                COMING
                <br />
                SOON
              </p>
            </div>
            <p className={cn(style["text-pink-400"])}>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <form className="relative">
              <input
                required
                type="email"
                placeholder="Email Address"
                className={cn(
                  style["border-gray-900"],
                  "peer py-4 pl-6 border placeholder:opacity-50 rounded-full outline-none w-full invalid:border-red-500",
                )}
              />
              <p className="hidden text-sm pl-6 py-2 text-red-500 peer-invalid:block">
                Please provide a valid email
              </p>
              <img
                src={error}
                className="hidden w-6 h-6 object-cover mx-3 peer-invalid:block absolute right-28 top-4"
              />
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className={cn(
                  style.button,
                  "py-5 px-10 w-26 rounded-full flex items-center justify-center shadow-xl cursor-pointer absolute right-0 top-0",
                )}
              >
                <img src={arrow} />
              </button>
            </form>
          </div>
        </div>
        <img
          src={heroDesktop}
          className="z-2 w-full h-full object-cover flex-1"
        />
      </section>
      <section className="lg:hidden">
        <div className="p-6">
          <img src={logo} className="w-30" />
        </div>
        <img src={heroMobile} className="w-full" />
        <div className="p-6 space-y-10">
          <div className="text-center">
            <p
              className={cn(
                style["text-pink-400"],
                "text-4xl tracking-[0.3em]",
              )}
              style={{ fontWeight: "300" }}
            >
              WE'RE
            </p>
            <p
              className={cn(
                style["text-gray-900"],
                "text-4xl tracking-[0.3em]",
              )}
              style={{ fontWeight: "600" }}
            >
              COMING
              <br />
              SOON
            </p>
          </div>
          <p className={cn(style["text-pink-400"], "text-center")}>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form className="relative">
            <input
              required
              type="email"
              placeholder="Email Address"
              className={cn(
                style["border-gray-900"],
                "peer py-4 pl-6 border placeholder:opacity-50 rounded-full outline-none w-full invalid:border-red-500",
              )}
            />
            <p className="hidden text-sm pl-6 py-2 text-red-500 peer-invalid:block">
              Please provide a valid email
            </p>
            <img
              src={error}
              className="hidden w-6 h-6 object-cover mx-3 peer-invalid:block absolute right-28 top-4"
            />
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className={cn(
                style.button,
                "py-5 px-10 w-26 rounded-full flex items-center justify-center shadow-xl cursor-pointer absolute right-0 top-0",
              )}
            >
              <img src={arrow} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
