import { urlFor } from "@/lib/urlFor";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};

const BlogList = ({ posts }: Props) => {
    return (
        <div>
            <hr className="border-yellow-500 mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 px-3 sm:px-8 md:px-10 gap-10 gap-y-16 pb-16 md:pb-24">
                {posts &&
                    posts.map((post) => (
                        <ClientSideRoute
                            key={post._id}
                            route={`/post/${post.slug.current}`}
                        >
                            <div className="flex flex-col group cursor-pointer overflow-hidden">
                                <div className="relative w-full h-80 drop-shadow-xl overflow-hidden rounded-md shadow-md">
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover object-center scale-[1.15] group-hover:scale-100 transition-all duration-500"
                                    />
                                    <div className="absolute bottom-0 w-full bg-opacity-30 bg-gradient-to-b from-transparent to-black backdrop-blur-sm rounded drop-shadow-xl text-white px-5 py-2 sm:py-5 flex flex-col sm:flex-row justify-between">
                                        <div className="text-sm">
                                            <p className="font-bold">
                                                {post.title}
                                            </p>
                                            <p>
                                                {new Date(
                                                    post._createdAt
                                                ).toLocaleDateString("en-IN", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center justify-center mt-3 sm:mt-0 shrink-0">
                                            {post?.categories &&
                                                post.categories.map(
                                                    (category, index) => (
                                                        <div
                                                            key={index}
                                                            className="bg-yellow-500 text-center text-black px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
                                                        >
                                                            <p>
                                                                {category.title}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 flex-1">
                                    <p className="underline text-lg font-bold">
                                        {post.title}
                                    </p>
                                    <p className="line-clamp-2 text-gray-500">
                                        {post.description}
                                    </p>
                                </div>

                                <p className="mt-5 font-bold flex items-center group-hover:underline">
                                    Read Post{" "}
                                    <BsArrowRight className="ml-2 text-lg group-hover:ml-6 transition-all duration-500" />
                                </p>
                            </div>
                        </ClientSideRoute>
                    ))}
            </div>
        </div>
    );
};

export default BlogList;
