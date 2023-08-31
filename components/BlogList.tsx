import { urlFor } from "@/lib/urlFor";
import Image from "next/image";

type Props = {
    posts: Post[];
};

const BlogList = ({ posts }: Props) => {
    return (
        <div>
            <hr className="border-yellow-500 mb-10" />
            <div>
                {posts &&
                    posts.map((post) => (
                        <div key={post._id} className="group cursor-pointer flex flex-col">
                            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-all duration-300">
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover object-left lg:object-center"
                                />
                                <div></div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default BlogList;
