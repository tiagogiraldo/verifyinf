import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="text-white text-center text-xl md:text-2xl lg:text-3xl max-w-4xl">
        <p className="mb-6">
          This is a project that emulates an influencer`s web page. The data was obtained from the Perplexity API and its code is available in the page`s repository, which is: {' '}
          <Link href="https://github.com/tiagogiraldo/verifyinf" className="text-blue-800 hover:text-blue-500 underline">
            github.com/tiagogiraldo/verifyinf
          </Link>
          .
        </p>
        <p className="mb-6">
          This project does not have any backend, for this reason it was omitted to connect it directly with the AI API.
        </p>
        <p>
          In the navigation bar, only the Leaderboard link works; the other links are intentionally broken by design.
        </p>
        <p>
          In the leaderboard table, if you click on any row, the application will take you to the information card of the selected Influencer.
        </p>
      </div>
    </div>
  );
}
