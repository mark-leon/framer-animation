import Page from "../components/page";

export default function Contact() {
  return (
    <Page>
      <div
        class="w-full relative overflow-hidden overflow-y-scroll no-scrollbar bg-white border-[1px] border-slate-300"
        style={{ display: "block" }}
      >
        <section
          class="px-4 py-12 bg-violet-600"
          style={{
            // backgroundImage: url(
            //   "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1734&amp;q=80"
            // ),
            backgroundImage: `url(https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1734&amp;q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div class="h-96 bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-scroll shadow-xl cursor-text font-mono">
            <div class="w-full p-3 bg-slate-900 flex items-center gap-1 sticky top-0">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <span class="text-sm text-slate-200 font-semibold absolute left-[50%] -translate-x-[50%]">
                contact@hover.dev
              </span>
            </div>
            <div class="p-2 text-slate-100 text-lg">
              <p>Hey there! Were excited to link 🔗</p>
              <p class="whitespace-nowrap overflow-hidden font-light">
                ------------------------------------------------------------------------
              </p>
              <p>
                To start, could you give us{" "}
                <span class="text-violet-300">your email?</span>
              </p>
              <p class="text-emerald-300">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="inline-block mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>sf</span>
              </p>
              <p>
                Awesome! And whats{" "}
                <span class="text-violet-300">your name?</span>
              </p>
              <p class="text-emerald-300">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="inline-block mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>sfsdf</span>
              </p>
              <p>
                Perfect, and{" "}
                <span class="text-violet-300">how can we help you?</span>
              </p>
              <p class="text-emerald-300">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="inline-block mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>dsds</span>
              </p>
              <p>Beautiful! Heres what weve got:</p>
              <p>
                <span class="text-blue-300">email:</span> sf
              </p>
              <p>
                <span class="text-blue-300">name:</span> sfsdf
              </p>
              <p>
                <span class="text-blue-300">description:</span> dsds
              </p>
              <p>Look good?</p>
              <div class="flex gap-2 mt-2">
                <button class="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-slate-100 text-black">
                  Restart
                </button>
                <button class="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-indigo-500 text-white">
                  Send it!
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
