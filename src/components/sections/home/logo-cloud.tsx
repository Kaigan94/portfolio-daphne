import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

export default function LogoCloud() {
  return (
    <section className=" overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm hidden xl:block">Some of my skills & tools:</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={100}>
              <div className="flex">Logo</div>
              <div className="flex">Logo</div>
              <div className="flex">Logo</div>
              <div className="flex">Logo</div>
              <div className="flex">Logo</div>
              <div className="flex">Logo</div>
              <div className="flex">Logo</div>
              <div className="flex">Logo</div>
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
