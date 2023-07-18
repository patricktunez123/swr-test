"use client";

import { usePosts } from "@/helpers/usePosts";

type dataType = {
  title: string;
  body: string;
  id: number;
  userId: number;
};

export const Loader = () => {
  return (
    <div>
      <span>Loading...</span>
    </div>
  );
};

export default function Home() {
  const { posts, isLoading, isError } = usePosts();

  console.log("data,", posts);
  console.log("isLoading", isLoading);
  console.log("error", isError);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {posts.map((item: dataType) => (
              <a
                key={item.id}
                href={`/user?u=${item.id}`}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {item.title}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  {item.body}
                </p>
              </a>
            ))}
          </>
        )}
      </div>
    </main>
  );
}
