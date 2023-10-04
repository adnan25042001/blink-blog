import BlogList from "@/components/BlogList";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;

// revalidates this page every 30 sec.
export const revalidate = 30; 

const Home = async () => {
    const posts = await client.fetch(query);

    return <BlogList posts={posts} />;
};

export default Home;
