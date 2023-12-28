import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Proj({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, image, link} = frontmatter;
  return (
    <li className="my-6">
      <section id="hero" className="flex items-center gap-4 space-x-4">
        <div className="flex-shrink-0 mr-4">{image && <img src={image} alt="" className="w-64 h-32 rounded-md mb-8" />}</div>
        {/* <div className="flex flex-col justify-start"> */}
          <div className="ml-4"> <a
          href={link}
          className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
          >
          {secHeading ? (
            <h2 className="text-lg font-medium decoration-dashed hover:underline">
              {title}
            </h2>
          ) : (
            <h3 className="text-lg font-medium decoration-dashed hover:underline">
              {title}
            </h3>
          )}
          </a></div>
        <div className="ml-4"><p>{description}</p></div>
      {/* </div> */}
      </section>
    </li>
  );
}
