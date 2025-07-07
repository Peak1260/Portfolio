import Image from "next/image";

export default function Page() {
  return (
    <section>
      <a>
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={180}
          height={180}
          priority
        />
      </a>

      <div className="prose prose-neutral dark:prose-invert">
        <h2>Hey there! 👋</h2>
        <p>
          I recently graduated with a degree in Computer Engineering from UC Santa Barbara. I'm passionate about technology and its potential to drive innovation. My experience spans building projects ranging from embedded systems to web development. I'm eager to apply my skills to real-world problems and create meaningful solutions. I believe technology is the catalyst that pushes our world forward, and I'm excited to be part of this journey.
        </p>
        <h2>Beyond the Code</h2>
        <p>
          When I'm not working on coding or engineering projects, you'll find me on the 
          basketball court or at the gym. I'm a firm believer in maintaining a healthy 
          balance between mental and physical well-being. I'm also deeply interested in financial markets and investing. Understanding the 
          intricacies of stocks and finance isn't just a hobby for me, it's a passion that 
          complements my technical background and analytical mindset.
        </p>
        <h2>Exploring the World</h2>
        <p>
          One of my greatest aspirations is to explore different corners of the world. 
          I'm fascinated by diverse cultures, cuisines, and perspectives. I believe that 
          traveling isn't just about visiting new places; it's about broadening our horizons 
          and understanding different ways of life.
        </p>
      </div>
    </section>
  );
}
