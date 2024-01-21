import Page from "../components/page";

export default function Contact() {
  return (
    <Page>
      {/* <h1>Contact</h1> */}
      <div
        class="w-full relative overflow-hidden overflow-y-scroll no-scrollbar bg-white border-[1px] border-slate-300"
        style={{ display: "block" }}
      >
        <section
          class="px-4 py-12 bg-violet-600"
          // style='background-image: url("https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1734&amp;q=80"); background-size: cover; background-position: center center;'
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
              <p>Hey there! We are excited to link 🔗</p>
              <p class="whitespace-nowrap overflow-hidden font-light">
                ------------------------------------------------------------------------
              </p>
              <p>
                To start, could you give us{" "}
                <span class="text-violet-300">your email?</span>
              </p>
              <form>
                <input
                  type="text"
                  class="sr-only"
                  autocomplete="off"
                  value=""
                />
              </form>
              <p>
                <span class="text-emerald-400">➜</span>{" "}
                <span class="text-cyan-300">~</span>{" "}
                <span class="opacity-50">Enter email: </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
