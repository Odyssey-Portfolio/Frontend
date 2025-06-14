import { COLOR_PRIMARY } from "@/_constants/Colors";
import {
  FONT_LEXEND,
  FONT_POPPINS,
  FONTSTYLE_PARAGRAPH1,
  FONTSTYLE_SUBTEXT2,
} from "@/_constants/Fonts";
import { GetBlog } from "@/_models/GetBlog";
import { setBlogDetails } from "@/_redux/blogDetailsPage/blogDetailsPageActions";
import { AppDispatch } from "@/_redux/store";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

interface BlogCardProps {
  blog: GetBlog;
  isImageB64: boolean;
}
export default function BlogCard(props: BlogCardProps) {
  const blogCardClassname = `relative rounded-lg flex flex-col md:h-full`;
  const imageClassname = `h-64 w-full`;
  const detailsClassname = `p-2 space-y-3`;
  return (
    <div className={blogCardClassname}>
      <div className={imageClassname}>
        <Image
          src={
            props.isImageB64
              ? decodeURIComponent(props.blog.image)
              : props.blog.image
          }
          alt="avatar"
          width={0}
          height={0}
          sizes="100vh"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 25,
          }}
        />
      </div>
      <div className={detailsClassname}>
        <TitleSection {...props} />
        <GoToBlogSection {...props} />
      </div>
    </div>
  );
}

function TitleSection(props: BlogCardProps) {
  const titleClassname = `${FONT_LEXEND.className} ${FONTSTYLE_SUBTEXT2}`;
  const subtitleClassname = `${FONT_POPPINS.className}`;
  return (
    <>
      <div className={titleClassname}>{props.blog.title}</div>
      <div className={subtitleClassname}>{props.blog.description}</div>
    </>
  );
}

function GoToBlogSection(props: BlogCardProps) {
  const goToBlogClassname = `flex flex-row space-x-2 items-center cursor-default select-none`;
  const iconClassname = `col-span-2 w-12 h-12 cursor-default`;
  const labelClassname = `${FONT_POPPINS.className} ${FONTSTYLE_PARAGRAPH1}`;
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const goToBlog = () => {
    dispatch(setBlogDetails(props.blog));
    router.push(`/blogs/${props.blog.id}`);
  };
  return (
    <div
      className={goToBlogClassname}
      style={{ color: COLOR_PRIMARY }}
      onClick={goToBlog}
    >
      <div className={iconClassname}>
        <BookOpenIcon />
      </div>
      <div className={labelClassname}>Read</div>
    </div>
  );
}
