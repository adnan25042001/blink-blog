import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
    params: {
        slug: string;
    };
};

// revalidates this page every 30 sec.
export const revalidate = 30; 

export const generateStaticParams = async () => {
    const query = groq`*[_type=='post']{
        slug
    }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug,
    }));
};

const Post = async ({ params: { slug } }: Props) => {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

    const post: Post = await client.fetch(query, { slug });

    return (
        <article className="px-4 sm:px-10 pb-28">
            <section className="space-x-2 border border-yellow-500 text-white">
                <div className="relative min-h-[180px] flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-[0.15] blur-sm p-10">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                            className="object-cover object-center mx-auto"
                        />
                    </div>
                    <section className="p-5 bg-yellow-500 w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-extrabold">
                                    {post.title}
                                </h1>
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

                            <div className="flex items-center space-x-2">
                                <Image
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                    className="rounded-full h-10 w-10 shrink-0 object-cover"
                                />

                                <div className="w-64">
                                    <h3 className="text-lg font-bold">
                                        {post.author.name}
                                    </h3>
                                    <div>{/* {TODO : author bio} */}</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="italic pt-10">{post.description}</h2>
                            <div className="flex items-center justify-end mt-auto space-x-2">
                                {post.categories.map((category) => (
                                    <p
                                        key={category._id}
                                        className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                                    >
                                        {category.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <div className="mt-20 space-y-2 text-lg text-gray-700">
                <PortableText
                    value={post.body}
                    components={RichTextComponents}
                />
            </div>
        </article>
    );
};

export default Post;
