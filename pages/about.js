import Page from "../components/page";

export default function About() {
  return (
    <Page>
      <div class="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative">
        <img
          src="https://s3.brilliant.com.bd/brilliant-blog/6.jpg"
          alt="Testimonial image for Matthew I."
          class="w-full h-44 object-cover"
        />
        <div class="bg-slate-900 text-slate-50 p-4">
          <span class="block font-semibold text-lg mb-1">Matthew I.</span>
          <span class="block mb-3 text-sm font-medium">Founder of XYZ</span>
          <span class="block text-sm text-slate-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            nostrum labore dolor facilis, nesciunt facere mollitia nam
            aspernatur esse corporis!
          </span>
        </div>
        <span class="text-7xl absolute top-2 right-2 text-slate-700"></span>
      </div>
    </Page>
  );
}
